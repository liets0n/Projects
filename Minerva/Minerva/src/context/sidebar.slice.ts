import { createSlice } from '@reduxjs/toolkit'

export const sidebar = createSlice({
  name: 'sidebar',
  initialState: {
    currentPage: '',
  },
  reducers: {
    changeCurrentPage(state, { payload }) {
      state.currentPage = payload
    },
  },
})

export const { changeCurrentPage } = sidebar.actions
export default sidebar.reducer
