import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export interface AgeState {
  age: number
  loading: boolean
}

const initialState: AgeState = {
  age: 25,
  loading: false,
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const ageUpAsync = createAsyncThunk<number, void, { state: { age: AgeState } }>(
  'age/ageUpAsync',
  async (_, { getState }) => {
    await delay(1000)
    return getState().age.age + 1
  },
)

export const ageDownAsync = createAsyncThunk<number, void, { state: { age: AgeState } }>(
  'age/ageDownAsync',
  async (_, { getState }) => {
    await delay(1000)
    return Math.max(0, getState().age.age - 1)
  },
)

const ageSlice = createSlice({
  name: 'age',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false
        state.age = action.payload
      })
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false
        state.age = action.payload
      })
  },
})

export default ageSlice.reducer
