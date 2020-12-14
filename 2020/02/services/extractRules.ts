import { PasswordLineType } from '../Types/PasswordLineType'

/**
 * Extract rules data from a given string.
 * Example: "1-3 a: abcde"
 * Will output: {
 *   min: 1,
 *   max: 3,
 *   letter: 'a',
 *   password: 'abcde',
 * }
 */
export function extractRules(line: string): PasswordLineType {
  const [, min, max, letter, password] = line.match(/([0-9]+)-([0-9]+) ([a-z]): ([a-z]+)/) || []

  return {
    min: Number(min),
    max: Number(max),
    letter,
    password,
  }
}
