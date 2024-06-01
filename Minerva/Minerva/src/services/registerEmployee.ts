import { DateTime } from 'luxon'
import { toast } from 'react-toastify'
import { addDoc, doc, setDoc } from 'firebase/firestore/lite'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { employeesCollectionRef, storage, db } from './../lib/firebase'

type DataType = {
  avatar: any
  name: string
  email: string
  sector?: string
  salary?: string
  contact?: string
  contract?: string
  lastname: string
  position: string
}

const registerEmployee = async (
  data: DataType,
  avatarState?: any,
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  collectionName: string = 'employees',
  uid?: string,
) => {
  const currentDate = DateTime.now().setLocale('pt').toLocaleString()

  await toast.promise(
    async () => {
      if (avatarState !== false) {
        const avatarName = data.name
          .replace(' ', '')
          .concat(data.lastname.replace(' ', ''))
          .toLowerCase()
          .concat('.' + data.avatar.name.split('.').at(-1))

        const storageRef = ref(storage, `avatars/${avatarName}`)
        const uploadTask = uploadBytesResumable(storageRef, data.avatar)

        uploadTask.on('state_changed', {
          error: erro => {
            toast.error('Erro ao carregar o avatar 🤯')
          },
          complete: () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async url => {
              data.avatar = { name: avatarName, url }
              await addDoc(employeesCollectionRef, { ...data, lastpayroll: currentDate })
            })
          },
        })
      } else {
        data.avatar = false

        if (collectionName === 'users') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          await setDoc(doc(db, 'users', uid), { ...data })
        } else {
          await addDoc(employeesCollectionRef, { ...data, lastpayroll: currentDate })
        }
      }
    },
    {
      pending: 'A processar...',
      success: 'Cadastrado com êxito 👌',
      error: 'Houve algum erro 🤯',
    },
  )
}

export default registerEmployee
