import { useAppDispatch } from '../app/hooks'
import { toggleTodo, removeTodo } from '../features/todos/todosSlice'
import type { Todo } from '../features/todos/todosSlice'

interface TodoItemProps {
  todo: Todo
}

function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useAppDispatch()

  return (
    <li className={`todo-item${todo.completed ? ' completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span>{todo.text}</span>
      </label>
      <button type="button" onClick={() => dispatch(removeTodo(todo.id))}>
        Remove
      </button>
    </li>
  )
}

export default TodoItem
