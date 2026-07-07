import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
  id: string
  text: string
  completed: boolean
}

const initialState: Todo[] = [
  { id: '1', text: 'Learn Redux Toolkit', completed: false },
  { id: '2', text: 'Build a todo app', completed: false },
]

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        state.push(action.payload)
      },
      prepare(text: string) {
        return { payload: { id: crypto.randomUUID(), text, completed: false } }
      },
    },
    toggleTodo(state, action: PayloadAction<string>) {
      const todo = state.find((t) => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo(state, action: PayloadAction<string>) {
      return state.filter((t) => t.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions
export default todosSlice.reducer
