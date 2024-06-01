import { getAuth, deleteUser } from 'firebase/auth'

const deleteUserAccount = () => {
  const auth = getAuth()
  const user: any = auth.currentUser

  deleteUser(user)
    .then(() => {
      // User deleted.
    })
    .catch(error => {
      // An error ocurred
      // ...
    })
}

export default deleteUserAccount
