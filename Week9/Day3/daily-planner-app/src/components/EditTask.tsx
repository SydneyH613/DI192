import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { editTask } from '../features/planner/plannerSlice'
import type { Task } from '../features/planner/plannerSlice'

interface EditTaskProps {
  task: Task
}

function EditTask({ task }: EditTaskProps) {
  const dispatch = useAppDispatch()
  const selectedDay = useAppSelector((state) => state.planner.selectedDay)
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(task.text)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(editTask({ day: selectedDay, id: task.id, text: trimmed }))
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <form onSubmit={handleSubmit} className="edit-task">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          autoFocus
        />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    )
  }

  return (
    <div className="edit-task">
      <span>{task.text}</span>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </div>
  )
}

export default EditTask
