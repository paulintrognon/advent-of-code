import { PositionType } from '../Types/PositionType'

export function moveToNextPosition(
  position: PositionType,
  movement: PositionType,
  mapLengthX: number
): PositionType {
  const newX = position.x + movement.x
  const newY = position.y + movement.y

  return {
    x: newX >= mapLengthX ? newX - mapLengthX : newX,
    y: newY,
  }
}
