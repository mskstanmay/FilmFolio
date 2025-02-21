import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// Get all users
router.get("/", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// Create a new user
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email, password },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "User creation failed" });
  }
});

export default router;
