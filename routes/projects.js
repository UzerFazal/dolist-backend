const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a new project
router.post('/', projectController.createProject);

// Get all projects
router.get('/', projectController.getAllProjects);

// Delete a project by ID
router.delete('/:id', projectController.deleteProject);

// Update a project (name, description, status, dueDate)
router.put('/:id', projectController.updateProject);

module.exports = router;
