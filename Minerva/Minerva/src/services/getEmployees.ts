import { getDoc, getDocs, doc } from 'firebase/firestore/lite'

import { employeesCollectionRef, db } from './../lib/firebase'

const getEmployees = async (collectionName: string = 'employees', uid?: string) => {
  if (collectionName === 'users') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const docRef = doc(db, 'users', uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return docSnap.data()
    }
  } else {
    const data = await getDocs(employeesCollectionRef)
    const response = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

    return response
  }
}

export default getEmployees
