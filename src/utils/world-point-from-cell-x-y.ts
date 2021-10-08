import WorldPoint from '../types/world-point.ts'
import CellXY     from '../types/cell-x-y.ts'

import CELL_SIZE from '../constants/cell-size.ts'

/**
 * Given a CellXY, computes the southeastern corner of the cell.
 *
 * The southeastern corner represents the two numerically lowest coordinates in a cell.
 */
export default function worldPointFromCellXY(cellXY: CellXY) {
  return new WorldPoint(cellXY.x*CELL_SIZE, cellXY.y*CELL_SIZE, 0);
}
