import { moveToNextPosition } from './moveToNextPosition'
import { PositionType } from '../Types/PositionType'

describe('moveToNextPosition()', () => {
  const mapLengthX = 9
  const movement: PositionType = {
    x: 3,
    y: 1,
  }
  it('should return next position (x = 0)', () => {
    const startPosition: PositionType = {
      x: 0,
      y: 0,
    }
    expect(moveToNextPosition(startPosition, movement, mapLengthX)).toEqual({ x: 3, y: 1 })
  })
  it('should return next position (x = max - 4)', () => {
    const startPosition: PositionType = {
      x: 5,
      y: 0,
    }
    expect(moveToNextPosition(startPosition, movement, mapLengthX)).toEqual({ x: 8, y: 1 })
  })
  it('should return next position (x = max - 3)', () => {
    const startPosition: PositionType = {
      x: 6,
      y: 0,
    }
    expect(moveToNextPosition(startPosition, movement, mapLengthX)).toEqual({ x: 0, y: 1 })
  })
  it('should return next position (x = max -2)', () => {
    const startPosition: PositionType = {
      x: 7,
      y: 0,
    }
    expect(moveToNextPosition(startPosition, movement, mapLengthX)).toEqual({ x: 1, y: 1 })
  })
  it('should return next position (x = max)', () => {
    const startPosition: PositionType = {
      x: 8,
      y: 0,
    }
    expect(moveToNextPosition(startPosition, movement, mapLengthX)).toEqual({ x: 2, y: 1 })
  })
})
