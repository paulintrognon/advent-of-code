import { MapType } from '../Types/MapType'
import { PositionType } from '../Types/PositionType'
import { isTree } from './isTree'
import { moveToNextPosition } from './moveToNextPosition'

export function countTrees(map: MapType, movement: PositionType): number {
  let treesCount = 0

  let currentPosition: PositionType = {
    x: 0,
    y: 0,
  }

  const mapLengthX = map[0].length
  const mapLengthY = map.length

  while (currentPosition.y < mapLengthY) {
    if (isTree(currentPosition, map)) {
      treesCount++
    }
    currentPosition = moveToNextPosition(currentPosition, movement, mapLengthX)
  }
  return treesCount
}
