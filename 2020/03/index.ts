import map from './map'
import { countTrees } from './services/countTrees'

/**
 * Part One
 */
const treesCount31 = countTrees(map, { x: 3, y: 1 })
console.log('Step One', { treesCount: treesCount31 })

/**
 * Part Two
 */
const treesCount11 = countTrees(map, { x: 1, y: 1 })
const treesCount51 = countTrees(map, { x: 5, y: 1 })
const treesCount71 = countTrees(map, { x: 7, y: 1 })
const treesCount12 = countTrees(map, { x: 1, y: 2 })

const result = treesCount11 * treesCount31 * treesCount51 * treesCount71 * treesCount12

console.log('Step Two', { result })
