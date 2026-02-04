const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// @route   GET /api/tasks
// @desc    Get all tasks
// @access  Public
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find()
      .sort({ date: -1 }) // Sort by newest first
      .lean() // Returns plain JS objects (better performance)
      .limit(1000); // Limit for memory optimization

    res.status(200).json({
      success: true,
      count: tasks.length,
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Error retrieving tasks',
      error: error.message
    });
  }
});

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { title, category } = req.body;

    // Validation
    if (!title || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title and category'
      });
    }

    const task = await Task.create({
      title,
      category,
      isCompleted: false,
      date: new Date()
    });

    res.status(201).json({
      success: true,
      message: 'Task created successfully',
      data: task
    });
  } catch (error) {
    console.error('Error creating task:', error);
    res.status(400).json({
      success: false,
      message: 'Error creating task',
      error: error.message
    });
  }
});

// @route   PUT /api/tasks/:id
// @desc    Update a task (toggle status or edit)
// @access  Public
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID format'
      });
    }

    const task = await Task.findByIdAndUpdate(
      id,
      updates,
      { 
        new: true, // Return updated document
        runValidators: true // Run schema validators
      }
    );

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task updated successfully',
      data: task
    });
  } catch (error) {
    console.error('Error updating task:', error);
    res.status(400).json({
      success: false,
      message: 'Error updating task',
      error: error.message
    });
  }
});

// @route   DELETE /api/tasks/:id
// @desc    Delete a specific task
// @access  Public
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid task ID format'
      });
    }

    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: 'Task not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Task deleted successfully',
      data: task
    });
  } catch (error) {
    console.error('Error deleting task:', error);
    res.status(400).json({
      success: false,
      message: 'Error deleting task',
      error: error.message
    });
  }
});

// @route   DELETE /api/tasks/completed/all
// @desc    Bulk delete all completed tasks
// @access  Public
router.delete('/completed/all', async (req, res) => {
  try {
    const result = await Task.deleteMany({ isCompleted: true });

    res.status(200).json({
      success: true,
      message: `${result.deletedCount} completed task(s) deleted successfully`,
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error('Error deleting completed tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting completed tasks',
      error: error.message
    });
  }
});

module.exports = router;