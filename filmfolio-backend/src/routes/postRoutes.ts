import express, { Request } from "express";
import { PrismaClient } from "@prisma/client";
import { ServerResponse } from "http"; // Import ServerResponse

const router = express.Router();
const prisma = new PrismaClient();

// ✅ Get all posts
router.get("/", async (req: Request, res: ServerResponse) => {
  try {
    const posts = await prisma.post.findMany({
      include: { author: { select: { id: true, name: true, email: true } } },
    });

    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(posts));
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.write(JSON.stringify({ error: "Failed to fetch posts" }));
    res.end();
  }
});

// ✅ Create a new post
router.post("/", async (req: Request, res: ServerResponse) => {
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const { title, content, userId } = JSON.parse(body);

    if (!title || !content || !userId) {
      res.statusCode = 400;
      res.write(JSON.stringify({ error: "Title, content, and userId are required" }));
      res.end();
      return;
    }

    try {
      const newPost = await prisma.post.create({
        data: { title, content, authorId: userId },
      });

      res.statusCode = 201;
      res.write(JSON.stringify(newPost));
      res.end();
    } catch (error) {
      res.statusCode = 400;
      res.write(JSON.stringify({ error: "Post creation failed" }));
      res.end();
    }
  });
});

// ✅ Get a single post by ID
router.get("/:id", async (req: Request<{ id: string }>, res: ServerResponse) => {
  const { id } = req.params;

  try {
    const post = await prisma.post.findUnique({
      where: { id },
      include: { author: { select: { id: true, name: true, email: true } } },
    });

    if (!post) {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: "Post not found" }));
      res.end();
      return;
    }

    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(post));
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.write(JSON.stringify({ error: "Failed to fetch post" }));
    res.end();
  }
});

// ✅ Delete a post
router.delete("/:id", async (req: Request<{ id: string }>, res: ServerResponse) => {
  const { id } = req.params;

  try {
    const existingPost = await prisma.post.findUnique({ where: { id } });

    if (!existingPost) {
      res.statusCode = 404;
      res.write(JSON.stringify({ error: "Post not found" }));
      res.end();
      return;
    }

    await prisma.post.delete({ where: { id } });

    res.statusCode = 200;
    res.write(JSON.stringify({ message: "Post deleted successfully" }));
    res.end();
  } catch (error) {
    res.statusCode = 500;
    res.write(JSON.stringify({ error: "Failed to delete post" }));
    res.end();
  }
});

export default router;
