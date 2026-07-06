import { useContext } from 'react';
import TaskContext from '../context/TaskContext';
import TaskItem from './TaskItem';

function TaskList() {
  const { state } = useContext(TaskContext);

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === 'active') return !task.completed;
    if (state.filter === 'completed') return task.completed;
    return true;
  });

  if (filteredTasks.length === 0) {
    return <p>No tasks to show.</p>;
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
