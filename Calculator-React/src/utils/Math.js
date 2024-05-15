// Percentage
export const percentage = (value) => {
  const temp = String(value)
  let filtered = String(value)

  if (filtered.includes('(')) {
    filtered = filtered.slice(1)
  }

  if (filtered.includes(')')) {
    filtered = filtered.slice(0, -1)
  }

  const result = (eval(filtered.replace('%', '')) / 100)

  return (temp.includes('(') || temp.includes(')')) ?
    temp.replace(filtered, result).replace('%', '') : result
}

// Square root
export const sqrt = (value) => {
  const temp = String(value)
  let filtered = String(value).replace('√', '')

  if (temp.includes('(√')) {
    filtered = filtered.slice(1)
  }

  if (temp.includes('(√') && temp.includes(')')) {
    filtered = filtered.slice(0, -1)
  }

  const result = Math.sqrt(eval(filtered))

  return (temp.includes('(') || temp.includes(')')) ?
    temp.replace(filtered, result).replace('√', '') : result
}

// Fatorial
export const fatorial = (value) => {
  const temp = value
  let filtered = String(value).replace('!', '')
  let result = 1

  if (String(temp).includes('(')) {
    filtered = filtered.slice(1)
  }

  if (String(temp).includes(')')) {
    filtered = filtered.slice(0, -1)
  }

  for (let i = filtered; i > 1; i--) {
    result *= i
  }

  return (String(temp).includes('(') || String(temp).includes(')')) ?
    String(temp).replace(filtered, result).replace('!', '') : result
}
