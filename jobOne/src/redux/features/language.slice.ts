import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  idiom: 'en'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.idiom = action.payload
    }
  }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
