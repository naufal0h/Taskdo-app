function FilterBar({ currentFilter, onFilterChange, onClearCompleted, hasCompletedTasks }) {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'active', label: 'Active' },
    { id: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-bar">
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${currentFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      
      {hasCompletedTasks && (
        <button 
          className="clear-completed-btn"
          onClick={onClearCompleted}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default FilterBar;