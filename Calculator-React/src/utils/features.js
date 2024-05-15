import { percentage, sqrt, fatorial } from './Math'

const operators = ['+', '-', '*', '/', '.']

/*
 * I received an expression that contains % and where it has % converts by its result
 * example the function will receive 1 + 2% and will return 1 + 0.02
 */
export const convertExpression = (value) => {
  let temp = value

  if (value.includes('√(')) {
    const regexp = value.match(/\(?√\(([0-9]*.[0-9]*)*\)\)?/) ?? 0
    const values = eval(convertToCarateValid(String(regexp[0]).replaceAll('√', '')))

    if (regexp) {
      temp = temp.replace(regexp[0], `√(${values})`)
    }
  }

  const filtered = convertToSymbols(temp)
    .split(' ')
    .map((item) => {
      let values = item

      if (item.includes('%')) {
        return item.replace(values, percentage(values))
      }

      if (item.includes('√')) {
        return item.replace(values, sqrt(values))
      }

      if(item.includes('!')) {
        return item.replace(values, fatorial(values))
      }

      return item
    })

  return convertToCarateValid(filtered.join().replaceAll(',', ''))
}

/*
 * This function will handle the values entered by the user and return the
 * your result
 */
export const updateCalc = (value) => {
  const filtered = convertToCarateValid(value)
  const open = filtered.toString().match(/\(/g) ?? 0
  const closed = filtered.toString().match(/\)/g) ?? 0
  const lastItemOfExpression = filtered.toString().at(-1)

  if (
    open.length !== closed.length ||
    lastItemOfExpression === '(' ||
    lastItemOfExpression === '√' ||
    operators.includes(filtered.at(-1))
  ) {
    return { expression: convertToSymbols(filtered) }
  } else {
    return {
      result: calculate(convertExpression(filtered)),
      expression: convertToSymbols(filtered)
    }
  }
}

/*
 * This function will be responsible for the calculations of addition, subtraction
 * multiplication and division of all application.
 */
export const calculate = (value) => {
  return eval(value)
}

// This function will erase the last value of an expression.
export const deleteTheLastItem = (value) => {
  return value.toString().trim().slice(0, -1)
}

/*
 * This function will receive symbols used in mathematical calculations and will
 * convert them into characters that the computer can understand for example
 * this function will take ÷ and convert it to /
 */
export const convertToCarateValid = (value) => {
  const filtered = []

  value
    .toString()
    .replaceAll(' ', '')
    .split('')
    .map((item) => {
      switch (item) {
        case 'x':
          filtered.push('*')
          break
        case '÷':
          filtered.push('/')
          break
        case 'π':
          filtered.push(Math.PI)
          break
        case 'e':
          filtered.push(Math.E)
          break
        default:
          filtered.push(item)
          break
      }
    })

  return filtered.join().replaceAll(',', '')
}

/*
 * This function will receive characters used in computational calculations and will
 * convert them to symbols commonly used in mathematical calculations
 * this function will receive / and convert it to ÷
 */
export const convertToSymbols = (value) => {
  const filtered = []

  value
    .toString()
    .split('')
    .map((item) => {
      switch (item) {
        case '*':
          filtered.push(' x ')
          break
        case '/':
          filtered.push(' ÷ ')
          break
        case '+':
          filtered.push(' + ')
          break
        case '-':
          filtered.push(' - ')
          break
        default:
          filtered.push(item)
          break
      }
    })

  return filtered.join().replaceAll(',', '')
}

// This function will save and retrieve user histories
export const historyManager = (
  action = 'set',
  value = { expression: '0 + 0', result: 0 }
) => {
  const storage = window.localStorage.getItem('History')

  switch (action) {
    case 'get':
      if (storage) {
        return storage
          .split(',')
          .map((item) => item)
          .slice(1)
      }
      return ['No history available']
    case 'set':
      window.localStorage.setItem(
        'History',
        `${storage}, ${convertToSymbols(value.expression)} = ${value.result}`
      )
      break
    default:
  }
}
