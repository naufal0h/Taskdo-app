import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all'); // all, active, completed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks from API on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}/api/tasks`);
      const result = await response.json();
      
      if (result.success) {
        setTasks(result.data);
      } else {
        setError('Failed to fetch tasks');
      }
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Unable to connect to server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Add a new task
  const addTask = async (taskData) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTasks([result.data, ...tasks]); // Add new task to the beginning
      } else {
        alert('Failed to add task: ' + result.message);
      }
    } catch (err) {
      console.error('Error adding task:', err);
      alert('Unable to add task. Please try again.');
    }
  };

  // Toggle task completion status
  const toggleTask = async (id) => {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isCompleted: !task.isCompleted }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTasks(tasks.map(t => t._id === id ? result.data : t));
      }
    } catch (err) {
      console.error('Error toggling task:', err);
      alert('Unable to update task. Please try again.');
    }
  };

  // Delete a specific task
  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTasks(tasks.filter(t => t._id !== id));
      }
    } catch (err) {
      console.error('Error deleting task:', err);
      alert('Unable to delete task. Please try again.');
    }
  };

  // Clear all completed tasks
  const clearCompleted = async () => {
    const completedCount = tasks.filter(t => t.isCompleted).length;
    
    if (completedCount === 0) {
      alert('No completed tasks to clear.');
      return;
    }

    if (!window.confirm(`Are you sure you want to delete ${completedCount} completed task(s)?`)) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/tasks/completed/all`, {
        method: 'DELETE',
      });
      
      const result = await response.json();
      
      if (result.success) {
        setTasks(tasks.filter(t => !t.isCompleted));
        alert(result.message);
      }
    } catch (err) {
      console.error('Error clearing completed tasks:', err);
      alert('Unable to clear completed tasks. Please try again.');
    }
  };

  // Filter tasks based on selected filter
  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      default:
        return tasks;
    }
  };

  // Calculate task statistics
  const activeCount = tasks.filter(t => !t.isCompleted).length;
  const completedCount = tasks.filter(t => t.isCompleted).length;
  const filteredTasks = getFilteredTasks();

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1 className="title">
            <span className="title-icon">✓</span>
            TaskDo
          </h1>
          <p className="subtitle">Organize your day, the smart way</p>
        </header>

        {/* Error Message */}
        {error && (
          <div className="error-message">
            <span>⚠️ {error}</span>
            <button onClick={fetchTasks} className="retry-btn">Retry</button>
          </div>
        )}

        {/* Task Input */}
        <TaskInput onAddTask={addTask} />

        {/* Statistics */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-value">{tasks.length}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{activeCount}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{completedCount}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>

        {/* Filter Bar */}
        <FilterBar 
          currentFilter={filter} 
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          hasCompletedTasks={completedCount > 0}
        />

        {/* Task List */}
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading tasks...</p>
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">📝</span>
            <h3>No tasks {filter !== 'all' ? filter : 'yet'}</h3>
            <p>
              {filter === 'all' 
                ? 'Add a task to get started!' 
                : `No ${filter} tasks to display.`}
            </p>
          </div>
        ) : (
          <TaskList 
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}

        {/* Footer */}
        <footer className="footer">
          <p>Built with React + Express + MongoDB</p>
        </footer>
      </div>
    </div>
  );
}

export default App;