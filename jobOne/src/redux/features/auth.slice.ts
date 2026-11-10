import { toast } from 'react-toastify'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const getData = localStorage.getItem('user')

const initialState = {
  userAccount: getData != null ? JSON.parse(getData) : null,
  authenticated: !(getData == null)
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      if (
        action.payload.email === 'lietsondossantos@gmail.com' &&
        action.payload.password === '123456789'
      ) {
        state.userAccount = action.payload
        state.authenticated = true
        localStorage.setItem(
          'user',
          JSON.stringify({
            ...action.payload,
            pictor: '',
            name: 'lietson dos santos'
          })
        )
      } else {
        toast.error('Senha ou E-mail incorreto 🤧')
      }
    },

    logout: state => {
      state.userAccount = null
      state.authenticated = false
      localStorage.removeItem('user')
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer
