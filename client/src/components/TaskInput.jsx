import { useState } from 'react';

const CATEGORIES = ['Work', 'Personal', 'Shopping', 'Health', 'Other'];

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Work');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim() === '') {
      alert('Please enter a task title');
      return;
    }

    onAddTask({
      title: title.trim(),
      category: category,
    });

    // Reset form
    setTitle('');
    setCategory('Work');
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="task-input"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={200}
        />
        
        <select 
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        
        <button type="submit" className="add-btn">
          <span className="add-icon">+</span>
          Add Task
        </button>
      </div>
    </form>
  );
}

export default TaskInput;