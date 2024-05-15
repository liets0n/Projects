import { createSlice } from '@reduxjs/toolkit'

export const signInSlice = createSlice({
  name: 'signin',
  initialState: {
    isOpen: false,
  },
  reducers: {
    changeSignInState(state) {
      state.isOpen = !state.isOpen
    },
  },
})

export const { changeSignInState } = signInSlice.actions
export default signInSlice.reducer
