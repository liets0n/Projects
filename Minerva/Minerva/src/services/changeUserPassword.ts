import { toast } from 'react-toastify'
import { getAuth, updatePassword } from 'firebase/auth'

const ChangeUserPassword = (newPassword: string) => {
  const auth = getAuth()
  const user: any = auth.currentUser

  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch(error => {
      // An error ocurred
      // ...
    })
}

export default ChangeUserPassword
