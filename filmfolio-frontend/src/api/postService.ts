import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust this as needed

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
