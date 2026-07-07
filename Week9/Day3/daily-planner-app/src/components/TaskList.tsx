import { useAppSelector } from '../app/hooks'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'

function TaskList() {
  const selectedDay = useAppSelector((state) => state.planner.selectedDay)
  const tasks = useAppSelector(
    (state) => state.planner.tasksByDay[selectedDay] ?? [],
  )

  if (tasks.length === 0) {
    return <p className="empty">No tasks for this day yet.</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className="task-item">
          <EditTask task={task} />
          <DeleteTask taskId={task.id} />
        </li>
      ))}
    </ul>
  )
}

export default TaskList
