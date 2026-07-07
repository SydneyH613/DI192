import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface Task {
  id: string
  text: string
}

export interface PlannerState {
  selectedDay: string
  tasksByDay: Record<string, Task[]>
}

function todayIsoDate(): string {
  return new Date().toISOString().slice(0, 10)
}

const today = todayIsoDate()

const initialState: PlannerState = {
  selectedDay: today,
  tasksByDay: {
    [today]: [
      { id: '1', text: 'Plan the week' },
      { id: '2', text: 'Review Redux Toolkit' },
    ],
  },
}

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    setSelectedDay(state, action: PayloadAction<string>) {
      state.selectedDay = action.payload
    },
    addTask: {
      reducer(
        state,
        action: PayloadAction<{ day: string; task: Task }>,
      ) {
        const { day, task } = action.payload
        if (!state.tasksByDay[day]) {
          state.tasksByDay[day] = []
        }
        state.tasksByDay[day].push(task)
      },
      prepare(day: string, text: string) {
        return { payload: { day, task: { id: crypto.randomUUID(), text } } }
      },
    },
    editTask(
      state,
      action: PayloadAction<{ day: string; id: string; text: string }>,
    ) {
      const { day, id, text } = action.payload
      const task = state.tasksByDay[day]?.find((t) => t.id === id)
      if (task) {
        task.text = text
      }
    },
    deleteTask(state, action: PayloadAction<{ day: string; id: string }>) {
      const { day, id } = action.payload
      if (state.tasksByDay[day]) {
        state.tasksByDay[day] = state.tasksByDay[day].filter(
          (t) => t.id !== id,
        )
      }
    },
  },
})

export const { setSelectedDay, addTask, editTask, deleteTask } =
  plannerSlice.actions
export default plannerSlice.reducer
