import { toast } from 'react-toastify'
import { db, storage } from './../lib/firebase'
import { ref, deleteObject } from 'firebase/storage'
import { doc, deleteDoc } from 'firebase/firestore/lite'

import getEmployees from './getEmployees'

const deleteEmployee = async (id: string, avatarData: any): Promise<any> => {
  await toast.promise(
    async () => {
      if (avatarData) {
        const avatarRef = ref(storage, `avatars/${avatarData.name}`)
        await deleteObject(avatarRef)
      }

      const employeeDoc = doc(db, 'employees', id)
      await deleteDoc(employeeDoc)
    },
    {
      pending: 'A processar...',
      success: 'Excluído com êxito 👌',
      error: 'Houve algum erro 🤯',
    },
  )

  return await getEmployees()
}

export default deleteEmployee
