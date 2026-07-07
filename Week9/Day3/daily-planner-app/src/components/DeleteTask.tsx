import { useAppDispatch, useAppSelector } from '../app/hooks'
import { deleteTask } from '../features/planner/plannerSlice'

interface DeleteTaskProps {
  taskId: string
}

function DeleteTask({ taskId }: DeleteTaskProps) {
  const dispatch = useAppDispatch()
  const selectedDay = useAppSelector((state) => state.planner.selectedDay)

  return (
    <button
      type="button"
      className="delete-task"
      onClick={() => dispatch(deleteTask({ day: selectedDay, id: taskId }))}
    >
      Delete
    </button>
  )
}

export default DeleteTask
