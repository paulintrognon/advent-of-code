import { extractRules } from './extractRules'

/**
 * Count number of lines that are correct.
 * A line is correct if the password at the end of the string is compliant with the rule specified at the start of the line.
 * Exemple of compliant line: "1-3 a: abcde"
 * Exemple of NON compliant line: "1-3 b: cdefg"
 */
export function countCorrectPasswords1(lines: string[]): number {
  // Nb of correct passwords count
  let correctPasswordsCount = 0

  // We will test correctness of each line.
  lines.forEach((line) => {
    // We extract the rule data and the password using a Regex
    const rules = extractRules(line)

    // We count the occurrences
    const occurrences = countLetterOccurrences(rules.password, rules.letter, rules.max)

    // If occurrences is false, it means the max has been exceeded: password is incorrect, we stop here
    if (occurrences === false) {
      return
    }

    // If occurrences is bellow minimum allowed: password is incorrect, we stop here
    if (occurrences < rules.min) {
      return
    }

    // If password is correct, we increment nb of correct password count
    correctPasswordsCount++
  })

  return correctPasswordsCount
}

/**
 * Return the number of occurrences of a given letter in a given word.
 * If the number of occurrences exceeds the max, returns false.
 */
export function countLetterOccurrences(
  word: string,
  letter: string,
  maxOccurrences: number
): number | false {
  // Nb of occurrences of given letter
  let occurrences = 0

  // For each letter...
  const hasMoreThanMax = word.split('').some((currentLetter: string) => {
    // If the letter matches the given letter, we increment the occurrences count
    if (currentLetter === letter) {
      occurrences++
    }

    // If the nb of occurrences is above the max allowed, we go no further
    return occurrences > maxOccurrences
  })

  // If nb of occurrences exceeded the max, we return false
  if (hasMoreThanMax) {
    return false
  }

  return occurrences
}
