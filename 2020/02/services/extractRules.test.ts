import { extractRules } from './extractRules'

describe('extractRules', () => {
  it('should extract the rules', () => {
    expect(extractRules('1-3 a: abcde')).toEqual({
      min: 1,
      max: 3,
      letter: 'a',
      password: 'abcde',
    })
  })
})
