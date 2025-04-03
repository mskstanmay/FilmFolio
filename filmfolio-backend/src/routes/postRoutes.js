import express from 'express';
import { PrismaClient } from '@prisma/client';
import { prisma } from "../config/db.js";

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  res.json({ message: 'Posts endpoint' });
});

router.post("/", passport.authenticate("jwt", { session: false }), async (req, res) => {
  try {
    const { title, content, images, movieId, rating } = req.body;
    const now = new Date();
    const authorId = req.user.id; // Extracted from JWT token

    const post = await prisma.$transaction(async (prisma) => {
      return await prisma.post.create({
        data: {
          id: Date.now().toString(), // Generate a unique ID
          title,
          content,
          images: images || [],
          movieId,
          rating: rating || 0,
          authorId,
          createdAt: now,
          updatedAt: now,
        },
      });
    });

    res.status(201).json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default router;

