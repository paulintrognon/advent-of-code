import { PasswordLineType } from '../Types/PasswordLineType'
import { countCorrectPasswords2, isValid } from './countCorrectPasswords2'

describe('countCorrectPasswords2()', () => {
  it('should return correct count according to rule 2', () => {
    const lines = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
    expect(countCorrectPasswords2(lines)).toEqual(1)
  })
})

describe('isValid()', () => {
  it('should return true if password is valid', () => {
    const passwordLine: PasswordLineType = {
      min: 1,
      max: 3,
      letter: 'a',
      password: 'abcde',
    }
    expect(isValid(passwordLine)).toBe(true)
  })
  it('should return true if password is valid with max out of range', () => {
    const passwordLine: PasswordLineType = {
      min: 5,
      max: 7,
      letter: 'a',
      password: 'ebcda',
    }
    expect(isValid(passwordLine)).toBe(true)
  })
  it('should return false if password is invalid', () => {
    const passwordLine: PasswordLineType = {
      min: 1,
      max: 3,
      letter: 'b',
      password: 'cdefg',
    }
    expect(isValid(passwordLine)).toBe(false)
  })
  it('should return false if password is valid', () => {
    const passwordLine: PasswordLineType = {
      min: 2,
      max: 9,
      letter: 'c',
      password: 'ccccccccc',
    }
    expect(isValid(passwordLine)).toBe(false)
  })
})
