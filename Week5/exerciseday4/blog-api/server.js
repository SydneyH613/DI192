// Exercise 1: Building a RESTful API for a Blog Platform
// This server implements full CRUD operations for blog posts

const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Simulate database with blog posts
let posts = [
  { id: 1, title: 'Welcome to our Blog', content: 'This is the first blog post. Welcome!' },
  { id: 2, title: 'Getting Started with Node.js', content: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine.' },
  { id: 3, title: 'Understanding Express.js', content: 'Express is a minimal and flexible Node.js web application framework.' }
];

let nextId = 4;

// GET /posts - Return a list of all blog posts
app.get('/posts', (req, res) => {
  console.log('GET /posts - Returning all blog posts');
  res.status(200).json({
    success: true,
    data: posts,
    count: posts.length
  });
});

// GET /posts/:id - Return a specific blog post based on its id
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    console.log(`GET /posts/:id - Post with id ${postId} not found`);
    return res.status(404).json({
      success: false,
      message: `Post with id ${postId} not found`
    });
  }
  
  console.log(`GET /posts/:id - Returning post with id ${postId}`);
  res.status(200).json({
    success: true,
    data: post
  });
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    console.log('POST /posts - Missing title or content');
    return res.status(400).json({
      success: false,
      message: 'Title and content are required'
    });
  }
  
  const newPost = {
    id: nextId++,
    title,
    content
  };
  
  posts.push(newPost);
  console.log(`POST /posts - New post created with id ${newPost.id}`);
  
  res.status(201).json({
    success: true,
    message: 'Post created successfully',
    data: newPost
  });
});

// PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  
  if (!post) {
    console.log(`PUT /posts/:id - Post with id ${postId} not found`);
    return res.status(404).json({
      success: false,
      message: `Post with id ${postId} not found`
    });
  }
  
  const { title, content } = req.body;
  
  if (title) post.title = title;
  if (content) post.content = content;
  
  console.log(`PUT /posts/:id - Post with id ${postId} updated`);
  
  res.status(200).json({
    success: true,
    message: 'Post updated successfully',
    data: post
  });
});

// DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const postIndex = posts.findIndex(p => p.id === postId);
  
  if (postIndex === -1) {
    console.log(`DELETE /posts/:id - Post with id ${postId} not found`);
    return res.status(404).json({
      success: false,
      message: `Post with id ${postId} not found`
    });
  }
  
  const deletedPost = posts.splice(postIndex, 1);
  console.log(`DELETE /posts/:id - Post with id ${postId} deleted`);
  
  res.status(200).json({
    success: true,
    message: 'Post deleted successfully',
    data: deletedPost[0]
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
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Blog API Server is running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /posts - Get all posts`);
  console.log(`  GET /posts/:id - Get a specific post`);
  console.log(`  POST /posts - Create a new post`);
  console.log(`  PUT /posts/:id - Update a post`);
  console.log(`  DELETE /posts/:id - Delete a post\n`);
});
