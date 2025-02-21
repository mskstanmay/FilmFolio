import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

// Fetch all posts
export const getPosts = async () => {
  const response = await api.get("/posts");
  return response.data;
};

// Fetch single post by ID
export const getPostById = async (id: string) => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
