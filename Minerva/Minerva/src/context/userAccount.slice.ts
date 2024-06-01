import { signOut } from 'firebase/auth'
import { createSlice } from '@reduxjs/toolkit'

import { auth } from './../lib/firebase'

const initialValue: any = null

export const userAccount = createSlice({
  name: 'userAccount',
  initialState: {
    userAccountData: initialValue,
  },
  reducers: {
    saveUserAccountData(state, { payload }) {
      state.userAccountData = payload
    },
    logout(state) {
      signOut(auth)
        .then(_ => console.log('Volte sempre 👋'))
        .then(error => console.log(error))

      state.userAccountData = null
    },
  },
})

export const { saveUserAccountData, logout } = userAccount.actions
export default userAccount.reducer
