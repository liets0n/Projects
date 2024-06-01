const numberAreIncluded = (word: string) => {
  const regex = /[0-9]/
  return !regex.test(word)
}

export default numberAreIncluded
