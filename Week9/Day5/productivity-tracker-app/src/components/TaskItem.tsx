import { useCallback, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { useAppDispatch } from '../app/hooks'
import { editTask, deleteTask, updateTaskProgress } from '../features/tasks/tasksSlice'
import type { Task } from '../features/tasks/tasksSlice'

interface TaskItemProps {
  task: Task
}

function TaskItem({ task }: TaskItemProps) {
  const dispatch = useAppDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(task.title)

  const handleSave = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const trimmed = title.trim()
      if (!trimmed) return
      dispatch(editTask({ id: task.id, title: trimmed }))
      setIsEditing(false)
    },
    [dispatch, task.id, title],
  )

  const handleProgressChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(
        updateTaskProgress({ id: task.id, progress: Number(event.target.value) }),
      )
    },
    [dispatch, task.id],
  )

  const handleMarkComplete = useCallback(() => {
    dispatch(updateTaskProgress({ id: task.id, progress: 100 }))
  }, [dispatch, task.id])

  const handleDelete = useCallback(() => {
    dispatch(deleteTask(task.id))
  }, [dispatch, task.id])

  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      {isEditing ? (
        <form onSubmit={handleSave} className="edit-task">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
          <button type="submit">Save</button>
          <button type="button" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </form>
      ) : (
        <div className="task-main">
          <span className="task-title">{task.title}</span>
          <button type="button" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}

      <div className="task-progress">
        <input
          type="range"
          min={0}
          max={100}
          value={task.progress}
          onChange={handleProgressChange}
        />
        <span>{task.progress}%</span>
      </div>

      <div className="task-actions">
        {!task.completed && (
          <button type="button" onClick={handleMarkComplete}>
            Mark Complete
          </button>
        )}
        <button type="button" className="delete-task" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TaskItem
