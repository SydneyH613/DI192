const express = require('express');
const router = express.Router();

// Sample in-memory database for storing to-do items
const todos = [];
let nextId = 1;

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  
  const newTodo = {
    id: nextId++,
    title,
    description: description || '',
    completed: false
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  const todo = todos.find(t => t.id === parseInt(id));
  
  if (!todo) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;
  
  res.json(todo);
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  
  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

module.exports = router;
