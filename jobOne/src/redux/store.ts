import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import authReducer from './features/auth.slice'
import themeReducer from './features/theme.slice'
import languageSlice from './features/language.slice'

const persistConfig = {
  key: 'root',
  version: 3,
  storage
}

const rootReducer = combineReducers({
  auth: authReducer,
  themes: themeReducer,
  language: languageSlice
})

const persisteReducer = persistReducer(persistConfig, rootReducer)

export const Store = configureStore({
  reducer: persisteReducer
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = (): any => useDispatch<AppDispatch>()

export default Store
