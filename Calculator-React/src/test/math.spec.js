import * as Math from './../utils/Math'

describe('Testing the Math file', () => {
  it('Should return the percentage of x', () => {
    expect(Math.percentage(0)).toBe(0)
    expect(Math.percentage(12)).toBe(0.12)
    expect(Math.percentage('12%')).toBe(0.12)
    expect(Math.percentage('(12%)')).toBe('(0.12)')
  })

  it('Should return the square root of x', () => {
    expect(Math.sqrt(4)).toBe(2)
    expect(Math.sqrt('√4')).toBe(2)
    expect(Math.sqrt('(√4)')).toBe('(2)')
  })

  it('Should return the fatorial of x', () => {
    expect(Math.fatorial(5)).toBe(120)
    expect(Math.fatorial('5!')).toBe(120)
    expect(Math.fatorial('(5!)')).toBe('(120)')
  })
})

