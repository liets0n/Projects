import { toast } from 'react-toastify'
import { getAuth, updateEmail } from 'firebase/auth'

const changeUserEmail = (email: string) => {
  const auth = getAuth()
  const user: any = auth.currentUser

  updateEmail(user, email)
    .then(() => {
      toast.success('E-mail atualizado com êxito')
    })
    .catch(error => {
      console.log(error.message)
      toast.error('Verifique o E-mail')
    })
}

export default changeUserEmail
