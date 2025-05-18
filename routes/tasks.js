const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Create a new task
router.post('/', taskController.createTask);

// Get all tasks
router.get('/', taskController.getAllTasks);

// Delete a task by ID
router.delete('/:id', taskController.deleteTask);

// Update a task by ID (edit title/description/status/projectId/dueDate)
router.put('/:id', taskController.updateTask);

module.exports = router;
