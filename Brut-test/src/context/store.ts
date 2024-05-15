import { configureStore } from '@reduxjs/toolkit'

import signInReducer from './signIn.slice'
import searchReducer from './search.slice'

const store = configureStore({
  reducer: {
    signIn: signInReducer,
    search: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
