import express from 'express';
import passport from 'passport';
import { prisma } from '../lib/prisma.js';

const router = express.Router();

// Protected route - requires authentication
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { name, category, location, description, price, image } = req.body;
    const now = new Date();

    const equipment = await prisma.$transaction(async (prisma) => {
      return await prisma.equipment.create({
        data: {
          id: Date.now().toString(), // Generate a unique ID
          name,
          category,
          location,
          description,
          price,
          image,
          createdAt: now,
          updatedAt: now
        }
      });
    });

    res.status(201).json(equipment);
  } catch (error) {
    console.error('Error creating equipment:', error);
    res.status(500).json({ error: 'Failed to create equipment' });
  }
});

router.get('/', async (req, res) => {
  try {
    const equipment = await prisma.equipment.findMany({
      select: {
        id: true,
        name: true,
        category: true,
        location: true,
        description: true,
        price: true,
        image: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return res.status(200).json(equipment);
  } catch (error) {
    console.error('Equipment fetch error:', error);
    return res.status(500).json([]);
  }
});

export default router;
