import passwords from './passwords'
import { countCorrectPasswords1 } from './services/countCorrectPasswords1'
import { countCorrectPasswords2 } from './services/countCorrectPasswords2'

const count = countCorrectPasswords1(passwords)
console.log('Part One', { count })

const count2 = countCorrectPasswords2(passwords)
console.log('Part Two', { count2 })
