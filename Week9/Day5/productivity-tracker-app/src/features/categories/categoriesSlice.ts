import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface Category {
  id: string
  name: string
}

const initialState: Category[] = [
  { id: 'cat-1', name: 'Work' },
  { id: 'cat-2', name: 'Personal' },
  { id: 'cat-3', name: 'Health' },
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action: PayloadAction<Category>) {
        state.push(action.payload)
      },
      prepare(name: string) {
        return { payload: { id: crypto.randomUUID(), name } }
      },
    },
    editCategory(state, action: PayloadAction<{ id: string; name: string }>) {
      const category = state.find((c) => c.id === action.payload.id)
      if (category) {
        category.name = action.payload.name
      }
    },
    deleteCategory(state, action: PayloadAction<string>) {
      return state.filter((c) => c.id !== action.payload)
    },
  },
})

export const { addCategory, editCategory, deleteCategory } =
  categoriesSlice.actions
export default categoriesSlice.reducer

export const selectCategories = (state: RootState) => state.categories

export const selectCategoryById = createSelector(
  [selectCategories, (_state: RootState, categoryId: string) => categoryId],
  (categories, categoryId) => categories.find((c) => c.id === categoryId),
)
