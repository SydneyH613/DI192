import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch } from '../app/hooks'
import { addTodo } from '../features/todos/todosSlice'

function AddTodo() {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return
    dispatch(addTodo(trimmed))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodo
