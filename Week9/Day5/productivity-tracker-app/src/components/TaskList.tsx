import { useState } from 'react'
import type { FormEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { addTask, selectTasksByCategory } from '../features/tasks/tasksSlice'
import { selectCategoryById } from '../features/categories/categoriesSlice'
import TaskItem from './TaskItem'

interface TaskListProps {
  categoryId: string
}

function TaskList({ categoryId }: TaskListProps) {
  const dispatch = useAppDispatch()
  const category = useAppSelector((state) =>
    selectCategoryById(state, categoryId),
  )
  const tasks = useAppSelector((state) =>
    selectTasksByCategory(state, categoryId),
  )
  const [title, setTitle] = useState('')

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmed = title.trim()
    if (!trimmed || !categoryId) return
    dispatch(addTask(trimmed, categoryId))
    setTitle('')
  }

  if (!category) {
    return <p className="empty">Select or create a category to get started.</p>
  }

  return (
    <div className="task-list">
      <h2>{category.name}</h2>

      <form onSubmit={handleAddTask} className="add-task">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`Add a task to ${category.name}`}
        />
        <button type="submit">Add Task</button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">No tasks in this category yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
