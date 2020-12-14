import { MapType } from '../Types/MapType'
import { PositionType } from '../Types/PositionType'

export function isTree(position: PositionType, map: MapType): boolean | null {
  // We get the line from the position. If line is null, we return null.
  const line = map[position.y]
  if (!line) {
    return null
  }

  // We get the element from the position. If element is null, we return null.
  const element = line[position.x]
  if (!element) {
    return null
  }

  // If the element is a '#', it means a tree.
  return element === '#'
}
