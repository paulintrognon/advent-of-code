import expenses from './expenses'

/**
 * Test 1
 */
expenses.some((expense1) => {
  return expenses.some((expense2) => {
    return testExpenses([expense1, expense2])
  })
})

/**
 * Test 2
 */
expenses.some((expense1) => {
  return expenses.some((expense2) => {
    return expenses.some((expense3) => {
      return testExpenses([expense1, expense2, expense3])
    })
  })
})

/**
 * Returns true and log the result if sum of expenses == 2020
 * Returns false otherwise
 */
function testExpenses(expenses: number[]): boolean {
  const sum = expenses.reduce((expense1, expense2) => expense1 + expense2, 0)

  if (sum === 2020) {
    const result = expenses.reduce((expense1, expense2) => expense1 * expense2, 1)
    console.log({ expenses, result })
    return true
  }
  return false
}
