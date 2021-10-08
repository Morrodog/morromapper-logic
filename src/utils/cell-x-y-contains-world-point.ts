import WorldPoint from '/src/types/world-point.ts'
import CellXY     from '/src/types/cell-x-y.ts'

import CELL_SIZE from '/src/constants/cell-size.ts'

import worldPointFromCellXY from '/src/utils/world-point-from-cell-x-y.ts'

/**
 * Morrowind's cells are each 8196 X units by 8196 Y units such that the southwest corner of the cell has the lowest X and Y coordinates.
 * This is true in all quadrants of worldspace, and in the context of negative numbers, "lowest" still means "lowest", rather than lowest absolute value.
 * Fortunately, this means that no special logic is required to handle WorldPoints with negative X and/or Y values.
 *
 * For example, the cell [0, 0] would contain the Worldpoint {x: 3, y: 1000, z: 100} because it's northeast of the cell's southwest corner, 
 * and its X and Y coordinates are not further than 8196 units from the southwest corner in any dimension.
 */
export default function cellXYContainsWorldPoint(cellXY: CellXY, worldPoint: WorldPoint) {
  var southwestCorner = worldPointFromCellXY(cellXY);
  var xDiff = worldPoint.x - southwestCorner.x;
  var yDiff = worldPoint.y - southwestCorner.y;
  return (xDiff < CELL_SIZE && xDiff >= 0) && (yDiff < CELL_SIZE && yDiff >= 0);
}
