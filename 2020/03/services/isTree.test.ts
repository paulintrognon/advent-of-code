import { MapType } from '../Types/MapType'
import { isTree } from './isTree'

describe('isTree()', () => {
  const map: MapType = [
    '.##.##..#',
    '##....#.#',
    '.........',
    '.........',
    '.........',
    '.........',
    '....#....',
    '.........',
    '........#',
  ]
  it('should return false if the position points to a . (0, 0)', () => {
    expect(isTree({ x: 0, y: 0 }, map)).toBe(false)
  })

  it('should return false if the position points to a . (4, 6)', () => {
    expect(isTree({ x: 4, y: 6 }, map)).toBe(true)
  })

  it('should return true if the position points to a #', () => {
    expect(isTree({ x: 8, y: 8 }, map)).toBe(true)
  })

  it('should return null if the position overflows X', () => {
    expect(isTree({ x: 10, y: 8 }, map)).toBe(null)
  })

  it('should return null if the position overflows Y', () => {
    expect(isTree({ x: 8, y: 10 }, map)).toBe(null)
  })
})
