import { DateTime } from 'luxon'

const showPaymentStatus = (date: string) => {
  const todayDate = DateTime.now().setLocale('pt').toLocaleString()
  const end = DateTime.fromISO(todayDate.split('/').reverse().join('-'))
  const start = DateTime.fromISO(date.split('/').reverse().join('-'))
  const howMuchTimeHasPassed: any = end.diff(start, ['months', 'days']).toObject()

  if (
    (howMuchTimeHasPassed.months >= 1 && howMuchTimeHasPassed.days >= 12) ||
    (howMuchTimeHasPassed.months >= 2 && howMuchTimeHasPassed.days >= 0)
  ) {
    return <p className='line__text line__text--error'>Processar</p>
  } else if (howMuchTimeHasPassed.months === 1 && howMuchTimeHasPassed.days <= 11) {
    return <p className='line__text line__text--warn'>Pendente</p>
  } else if (howMuchTimeHasPassed.months === 0) {
    return <p className='line__text line__text--success'>Processado</p>
  }
}

export default showPaymentStatus
