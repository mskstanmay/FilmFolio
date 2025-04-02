import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from './config/passport.js';
import { PrismaClient } from "@prisma/client";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import equipmentRoutes from './routes/equipmentRoutes.js';
import peopleRouter from './routes/people.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

const prisma = new PrismaClient();

// Test route
app.get("/", (req, res) => {
  res.send("FilmFolio Backend is Running!");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/people', peopleRouter);
// Remove the duplicate equipment endpoint that was here

// 404 handler
app.use((req, res) => {
  console.log(`404 - Not Found: ${req.method} ${req.url}`);
  res.status(404).json({
    status: 404,
    error: 'Route not found',
    message: `The requested route ${req.method} ${req.url} does not exist`,
    availableRoutes: [
      '/api/auth',
      '/api/users',
      '/api/posts',
      '/api/equipment',
      '/api/people'
    ],
    documentation: process.env.API_DOCS_URL || 'Documentation URL not configured'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api`);
});