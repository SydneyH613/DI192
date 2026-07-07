import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addTask } from '../features/planner/plannerSlice'

function AddTask() {
  const dispatch = useAppDispatch()
  const selectedDay = useAppSelector((state) => state.planner.selectedDay)
  const [text, setText] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(addTask(selectedDay, trimmed))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task for this day"
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTask
