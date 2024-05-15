import * as features from './../utils/features'

describe('Testing the base features of the app', () => {
  it('Should convert the received expression into an easy-to-understand expression', () => {
    expect(features.convertExpression('1 + 2')).toBe('1+2')
    expect(features.convertExpression('1 - 2')).toBe('1-2')
    expect(features.convertExpression('1 x 2')).toBe('1*2')
    expect(features.convertExpression('1 ÷ 2')).toBe('1/2')

    expect(features.convertExpression('2%')).toBe('0.02')
    expect(features.convertExpression('(1%)')).toBe('(0.01)')
    expect(features.convertExpression('(1 + 2)')).toBe('(1+2)')
    expect(features.convertExpression('1 + 2% + 1%')).toBe('1+0.02+0.01')
    expect(features.convertExpression('(1 + 2% + 1%)')).toBe('(1+0.02+0.01)')

    expect(features.convertExpression('√4')).toBe('2')
    expect(features.convertExpression('√(4 x 4)')).toBe('4')
    expect(features.convertExpression('4 + 5 x √4 x √(4 x 4)')).toBe('4+5*2*4')
    expect(features.convertExpression('4 x √(4 + 4)')).toBe('4*2.8284271247461903')

    expect(features.convertExpression('5!')).toBe("120")
    expect(features.convertExpression('5! + √4')).toBe("120+2")
  })

  it('Should convert characters into characters that the computer understands', () => {
    expect(features.convertToCarateValid('1 x 2')).toBe('1*2')
    expect(features.convertToCarateValid('1 ÷ 2')).toBe('1/2')
    expect(features.convertToCarateValid('1 + 2')).toBe('1+2')
    expect(features.convertToCarateValid('e')).toBe(String(Math.E))
    expect(features.convertToCarateValid('π')).toBe(String(Math.PI))
  })

  it('Should convert characters into characters commonly used in mathematical calculations', () => {
    expect(features.convertToSymbols('1*2')).toBe('1 x 2')
    expect(features.convertToSymbols('1/2')).toBe('1 ÷ 2')
    expect(features.convertToSymbols('1+2')).toBe('1 + 2')
    expect(features.convertToSymbols('1-2')).toBe('1 - 2')
  })

  it('Should return an object with the keys, expression containing the initial expression and a result key containing the result', () => {
    expect(features.updateCalc('1 + ')).toEqual({ expression: '1 + ' })
    expect(features.updateCalc('(1 + 2')).toEqual({ expression: '(1 + 2' })

    expect(features.updateCalc('1 + 1')).toEqual({
      expression: '1 + 1',
      result: 2
    })

    expect(features.updateCalc('(1 + 1%)')).toEqual({
      expression: '(1 + 1%)',
      result: 1.01
    })

    expect(features.updateCalc('(1 + 2) x 2')).toEqual({
      expression: '(1 + 2) x 2',
      result: 6
    })

    expect(features.updateCalc('(1% + 1%)')).toEqual({
      expression: '(1% + 1%)',
      result: 0.02
    })
  })

  it('Should delete the last value of the expression', () => {
    expect(features.deleteTheLastItem('1+')).toBe('1')
    expect(features.deleteTheLastItem('1+1')).toBe('1+')
    expect(features.deleteTheLastItem('1+11')).toBe('1+1')
    expect(features.deleteTheLastItem('(1+1)')).toBe('(1+1')
  })

  describe('Testing the function responsible for handling data stored in localStorage', () => {
    it.skip('Should save in Historic 0 + 0 = 0 when the function is called without any parameters', () => {
      window.localStorage.removeItem('History')
      features.historyManager()
      const storage = features.historyManager('get')
      expect(storage).toBe('0 + 0 = 0')
      expect(features.historyManager('save')).toBe(undefined)
    })

    it.skip('Should save the data passed by parameter when the function is called with parameter set', () => {
      window.localStorage.removeItem('History')
      features.historyManager('set', { expression: '0 + 0', result: 0 })

      const storage = window.localStorage.getItem('History')
      expect(storage).toBe('null, 0 + 0 = 0')
    })

    it.skip('Should retrieve saved data when function is called with get parameter', () => {
      expect(features.historyManager('get')).toEqual(['0 + 0 = 0'])
    })

    it.skip('Should return "No history available" when there is no history saved', () => {
      window.localStorage.removeItem('History')
      expect(features.historyManager('get')).toEqual(['No history available'])
    })
  })
})
