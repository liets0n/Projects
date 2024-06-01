import { createSlice } from '@reduxjs/toolkit'

const theme = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'light',
  },
  reducers: {
    changeTheme(state, { payload }) {
      state.currentTheme = payload
    },
  },
})

export const { changeTheme } = theme.actions
export default theme.reducer
