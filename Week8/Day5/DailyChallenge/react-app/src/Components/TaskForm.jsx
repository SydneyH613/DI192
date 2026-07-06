import { useContext, useRef } from 'react';
import TaskContext from '../context/TaskContext';

function TaskForm() {
  const { dispatch } = useContext(TaskContext);
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = inputRef.current.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TASK', payload: text });
      inputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} placeholder="Add a new task..." />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
