import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const router = express.Router();
const prisma = new PrismaClient();

// Register new user
const registerHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password, username } = req.body;

        if (!email || !password || !username) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        // Check if user exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            res.status(400).json({ error: 'Email already registered' });
            return;
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: username,
            },
        });

        // Generate JWT
        const token = jwt.sign(
            { id: newUser.id },
            process.env.JWT_SECRET!,
            { expiresIn: '1d' }
        );

        res.status(201).json({ token, user: { ...newUser, password: undefined } });
    } catch (error) {
        console.error("Register Error:", error); // Added error logging
        next(error); // Pass the error to the next middleware
    }
};

// Login user
const loginHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        // Find user
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (!user || !user.password) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Check password
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET!,
            { expiresIn: '1d' }
        );

        res.json({ token, user: { ...user, password: undefined } });
    } catch (error) {
        console.error("Login Error:", error);
        next(error);
    }
};

// Google OAuth callback handler
const googleCallbackHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = req.user as User | undefined;
        if (!user) {
            return res.redirect('http://localhost:3000/login?error=auth_failed');
        }

        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET!,
            { expiresIn: '1d' }
        );

        res.redirect(`http://localhost:3000/auth/callback?token=${token}`);
    } catch (error) {
        console.error("Google OAuth Error:", error);
        next(error);
    }
};

// Routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  googleCallbackHandler
);

export default router;
