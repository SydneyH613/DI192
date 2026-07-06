// Exercise 3: Part 2 - Data Module for Axios
// This module handles data retrieval from the JSONPlaceholder API

const axios = require('axios');

// Function to fetch all posts from JSONPlaceholder API
async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    throw error;
  }
}

// Function to fetch a specific post by ID
async function fetchPostById(postId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post with id ${postId}:`, error.message);
    throw error;
  }
}

// Function to fetch comments for a specific post
async function fetchCommentsByPostId(postId) {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching comments for post ${postId}:`, error.message);
    throw error;
  }
}

// Export functions
module.exports = {
  fetchPosts,
  fetchPostById,
  fetchCommentsByPostId
};
