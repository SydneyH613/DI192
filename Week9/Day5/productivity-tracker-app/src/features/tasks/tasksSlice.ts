import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface Task {
  id: string
  title: string
  categoryId: string
  progress: number
  completed: boolean
}

const initialState: Task[] = [
  {
    id: 'task-1',
    title: 'Finish quarterly report',
    categoryId: 'cat-1',
    progress: 40,
    completed: false,
  },
  {
    id: 'task-2',
    title: 'Book dentist appointment',
    categoryId: 'cat-3',
    progress: 0,
    completed: false,
  },
  {
    id: 'task-3',
    title: 'Read a chapter of a book',
    categoryId: 'cat-2',
    progress: 100,
    completed: true,
  },
]

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action: PayloadAction<Task>) {
        state.push(action.payload)
      },
      prepare(title: string, categoryId: string) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title,
            categoryId,
            progress: 0,
            completed: false,
          },
        }
      },
    },
    editTask(state, action: PayloadAction<{ id: string; title: string }>) {
      const task = state.find((t) => t.id === action.payload.id)
      if (task) {
        task.title = action.payload.title
      }
    },
    deleteTask(state, action: PayloadAction<string>) {
      return state.filter((t) => t.id !== action.payload)
    },
    updateTaskProgress(
      state,
      action: PayloadAction<{ id: string; progress: number }>,
    ) {
      const task = state.find((t) => t.id === action.payload.id)
      if (task) {
        task.progress = action.payload.progress
        task.completed = task.progress >= 100
      }
    },
  },
})

export const { addTask, editTask, deleteTask, updateTaskProgress } =
  tasksSlice.actions
export default tasksSlice.reducer

export const selectTasks = (state: RootState) => state.tasks

export const selectTasksByCategory = createSelector(
  [selectTasks, (_state: RootState, categoryId: string) => categoryId],
  (tasks, categoryId) => tasks.filter((task) => task.categoryId === categoryId),
)

export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((task) => task.completed).length,
)
