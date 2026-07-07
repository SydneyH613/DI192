import { useAppSelector } from '../app/hooks'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useAppSelector((state) => state.todos)

  if (todos.length === 0) {
    return <p className="empty">No todos yet. Add one above!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
