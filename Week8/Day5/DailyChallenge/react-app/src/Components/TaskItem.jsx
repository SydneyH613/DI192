import { useContext, useRef, useState } from 'react';
import TaskContext from '../context/TaskContext';

function TaskItem({ task }) {
  const { dispatch } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const editInputRef = useRef(null);

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_TASK', payload: task.id });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    const newText = editInputRef.current.value.trim();
    if (newText) {
      dispatch({ type: 'EDIT_TASK', payload: { id: task.id, text: newText } });
    }
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li className="task-item" key="editing">
        <input
          type="text"
          ref={editInputRef}
          defaultValue={task.text}
          autoFocus
        />
        <button onClick={handleSave}>Save</button>
      </li>
    );
  }

  return (
    <li className="task-item" key="view">
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TaskItem;
