// Exercise 3: Part 1 & 3 - Building a CRUD API with Express and Axios
// This app fetches data from JSONPlaceholder API using a data module

const express = require('express');
const dataService = require('./data/dataService');

const app = express();

// Middleware
app.use(express.json());

// GET /api/posts - Fetch all posts from JSONPlaceholder API
app.get('/api/posts', async (req, res) => {
  try {
    console.log('Fetching posts from JSONPlaceholder API...');
    const posts = await dataService.fetchPosts();
    console.log(`✅ Successfully retrieved ${posts.length} posts from the JSONPlaceholder API`);
    
    res.status(200).json({
      success: true,
      message: 'Posts retrieved successfully from JSONPlaceholder API',
      count: posts.length,
      data: posts
    });
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({
      success: false,
      message: 'Error fetching posts from external API',
      error: error.message
    });
  }
});

// GET /api/posts/:postId - Fetch a specific post by ID
app.get('/api/posts/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log(`Fetching post with id ${postId} from JSONPlaceholder API...`);
    const post = await dataService.fetchPostById(postId);
    console.log(`✅ Successfully retrieved post with id ${postId}`);
    
    res.status(200).json({
      success: true,
      message: `Post with id ${postId} retrieved successfully`,
      data: post
    });
  } catch (error) {
    console.error(`Error fetching post:`, error.message);
    res.status(500).json({
      success: false,
      message: 'Error fetching post from external API',
      error: error.message
    });
  }
});

// GET /api/posts/:postId/comments - Fetch comments for a specific post
app.get('/api/posts/:postId/comments', async (req, res) => {
  try {
    const postId = req.params.postId;
    console.log(`Fetching comments for post ${postId} from JSONPlaceholder API...`);
    const comments = await dataService.fetchCommentsByPostId(postId);
    console.log(`✅ Successfully retrieved ${comments.length} comments for post ${postId}`);
    
    res.status(200).json({
      success: true,
      message: `Comments for post ${postId} retrieved successfully`,
      count: comments.length,
      data: comments
    });
  } catch (error) {
    console.error(`Error fetching comments:`, error.message);
    res.status(500).json({
      success: false,
      message: 'Error fetching comments from external API',
      error: error.message
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'CRUD API is running and healthy'
  });
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`\n🌐 CRUD API Server is running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /api/posts - Get all posts from JSONPlaceholder API`);
  console.log(`  GET /api/posts/:postId - Get a specific post`);
  console.log(`  GET /api/posts/:postId/comments - Get comments for a post`);
  console.log(`  GET /health - Health check\n`);
});
