import { useContext } from 'react';
import TaskContext from '../context/TaskContext';

function TaskFilter() {
  const { state, dispatch } = useContext(TaskContext);

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className="task-filter">
      <button
        className={state.filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={state.filter === 'active' ? 'active' : ''}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={state.filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}

export default TaskFilter;
