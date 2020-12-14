import { MapType } from '../Types/MapType'
import { countTrees } from './countTrees'

describe('countTress()', () => {
  const map: MapType = [
    '.##.##..#',
    '##....#.#',
    '.........',
    '.........',
    '.........',
    '.........',
    '....#....',
    '.........',
    '######.##',
  ]

  it('should return correct amount of trees (1, 1)', () => {
    const treesCount = countTrees(map, { x: 1, y: 1 })
    expect(treesCount).toEqual(2)
  })

  it('should return correct amount of trees (3, 1)', () => {
    const treesCount = countTrees(map, { x: 3, y: 1 })
    expect(treesCount).toEqual(0)
  })

  it('should return correct amount of trees (1, 2)', () => {
    const treesCount = countTrees(map, { x: 1, y: 2 })
    expect(treesCount).toEqual(1)
  })
})
