const checkTime = (value: string): string => {
  const date = new Date()
  const past = new Date(value)

  const diff = past.getTime() - date.getTime()

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
  const hours = Math.ceil(diff / (1000 * 60 * 60))
  const minutes = Math.ceil(diff / (1000 * 60))
  const seconds = Math.ceil(diff / 1000)
  const week = Math.ceil(hours / (7 * 24))

  if (hours === 0 && minutes === 0 && seconds === 0) {
    return 'Agora Mesmo'
  }

  if (
    (hours === 0 || String(hours).includes('-')) &&
    (seconds === 0 || String(seconds).includes('-')) &&
    (minutes === 0 || String(minutes).includes('-')) &&
    (days === 0 || String(days).includes('-'))
  ) {
    if (week !== 0) {
      return `${Math.abs(week)} ${Math.abs(week) === 1 ? 'Semana' : 'Semanas'}`
    } else if (week === 0 && days !== 0) {
      return `${Math.abs(days)} ${Math.abs(days) === 1 ? 'Dia' : 'Dias'}`
    } else if (days === 0 && hours !== 0) {
      return `${Math.abs(hours)} ${Math.abs(hours) === 1 ? 'Hora' : 'Horas'}`
    } else if (hours === 0 && minutes !== 0) {
      return `${Math.abs(minutes)} ${
        Math.abs(minutes) === 1 ? 'Minuto' : 'Minutos'
      }`
    } else if (minutes === 0 && seconds !== 0) {
      return `${Math.abs(seconds)} ${
        Math.abs(seconds) === 1 ? 'Segundo' : 'Segundos'
      }`
    } else {
      return 'Tempo Invalido'
    }
  } else {
    return 'Tempo Invalido'
  }
}

export default checkTime
