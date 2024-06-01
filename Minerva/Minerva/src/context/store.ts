import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import themeReducer from './theme.slice'
import sidebarReducer from './sidebar.slice'
import userAccountReducer from './userAccount.slice'

const store = configureStore({
  reducer: {
    userAccount: userAccountReducer,
    sidebar: sidebarReducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
