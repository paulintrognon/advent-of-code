import { countCorrectPasswords1, countLetterOccurrences } from './countCorrectPasswords1'

describe('countCorrectPasswords', () => {
  it('should return the correct number of correct lines', () => {
    const lines = ['1-3 a: abcde', '1-3 b: cdefg', '2-9 c: ccccccccc']
    expect(countCorrectPasswords1(lines)).toEqual(2)
  })
})

describe('countLetterOccurrences', () => {
  const letter = 'g'
  const word = 'gddzadqsqszaodsgasdzefeqgzaopdzag'
  it('should return the number of occurrences if bellow max', () => {
    expect(countLetterOccurrences(word, letter, 9)).toEqual(4)
  })
  it('should return the number of occurrences if equal max', () => {
    expect(countLetterOccurrences(word, letter, 4)).toEqual(4)
  })
  it('should return false if number of occurrences exceeds max', () => {
    expect(countLetterOccurrences(word, letter, 3)).toBe(false)
  })
})
