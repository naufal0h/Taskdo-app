function TaskItem({ task, onToggle, onDelete }) {
  const getCategoryColor = (category) => {
    const colors = {
      Work: '#3b82f6',
      Personal: '#8b5cf6',
      Shopping: '#ec4899',
      Health: '#10b981',
      Other: '#6b7280'
    };
    return colors[category] || colors.Other;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  return (
    <div className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
      <div className="task-checkbox-wrapper">
        <input
          type="checkbox"
          className="task-checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task._id)}
        />
        <span className="checkmark"></span>
      </div>

      <div className="task-content">
        <p className="task-title">{task.title}</p>
        <div className="task-meta">
          <span 
            className="task-category"
            style={{ 
              backgroundColor: `${getCategoryColor(task.category)}20`,
              color: getCategoryColor(task.category),
              borderColor: getCategoryColor(task.category)
            }}
          >
            {task.category}
          </span>
          <span className="task-date">{formatDate(task.date)}</span>
        </div>
      </div>

      <button 
        className="delete-btn"
        onClick={() => onDelete(task._id)}
        aria-label="Delete task"
      >
        <span className="delete-icon">×</span>
      </button>
    </div>
  );
}

export default TaskItem;