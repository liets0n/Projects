import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
  name: 'signin',
  initialState: {
    text: '',
  },
  reducers: {
    toSearchFor(state, { payload }) {
      state.text = payload
    },
  },
})

export const { toSearchFor } = searchSlice.actions
export default searchSlice.reducer
