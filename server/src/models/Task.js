const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Task title is required'],
      trim: true,
      maxlength: [200, 'Title cannot exceed 200 characters']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true,
      enum: {
        values: ['Work', 'Personal', 'Shopping', 'Health', 'Other'],
        message: '{VALUE} is not a valid category'
      },
      default: 'Other'
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
    collection: 'tasks'
  }
);

// Index for faster queries (optimized for low memory)
taskSchema.index({ isCompleted: 1, date: -1 });

// Virtual for formatted date (optional)
taskSchema.virtual('formattedDate').get(function() {
  return this.date.toLocaleDateString();
});

// Ensure virtuals are included in JSON
taskSchema.set('toJSON', { virtuals: true });
taskSchema.set('toObject', { virtuals: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;