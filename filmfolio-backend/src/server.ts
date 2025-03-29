import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import passport from './config/passport';

import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes"; // ✅ Import User Routes
import postRoutes from "./routes/postRoutes"; // ✅ Import Post Routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // Allow only Next.js frontend
    credentials: true, // Needed for cookies/auth
  })
);

app.use(express.json());

// Initialize Passport
app.use(passport.initialize());

// Basic API Route

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes); // ✅ Add user routes
app.use("/api/posts", postRoutes); // ✅ Add post routes

app.get("/", (req, res) => {
  res.send("FilmFolio Backend is Running!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
