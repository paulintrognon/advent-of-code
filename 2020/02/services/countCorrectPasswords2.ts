import { PasswordLineType } from '../Types/PasswordLineType'
import { extractRules } from './extractRules'

/**
 * Counts number of lines matching rules 2
 */
export function countCorrectPasswords2(lines: string[]): number {
  let count = 0

  // We check each line
  lines.forEach((line) => {
    const rules = extractRules(line)
    if (isValid(rules)) {
      count++
    }
  })

  return count
}

/**
 * Returns true if the letter matches positions min or max EXACTLY ONCE
 * Exemple: "1-3 a: abcde" is valid: position 1 contains a and position 3 does not.
 *          "1-3 b: cdefg" is invalid: neither position 1 nor position 3 contains b.
 *          "2-9 c: ccccccccc" is invalid: both position 2 and position 9 contain c.
 */
export function isValid(passwordLine: PasswordLineType): boolean {
  const doesMatchMin = passwordLine.password[passwordLine.min - 1] === passwordLine.letter
  const doesMatchMax = passwordLine.password[passwordLine.max - 1] === passwordLine.letter
  return (doesMatchMin && !doesMatchMax) || (!doesMatchMin && doesMatchMax)
}
