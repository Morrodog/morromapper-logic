import WorldPoint from '../types/world-point.ts'
import CellXY     from '../types/cell-x-y.ts'

import CELL_SIZE from '../constants/cell-size.ts'

/**
 * Given a WorldPoint, returns the CellXY of the cell spatially containing that point.
 *
 * ("Spatially" is specified because Morrowind's data structure makes it possible to logically place
 * an item into a cell that spatially does not contain it.)
 */
export default function cellXYFromWorldPoint(worldPoint: WorldPoint) {
  return new CellXY({
    x: Math.floor(worldPoint.x/CELL_SIZE),
    y: Math.floor(worldPoint.y/CELL_SIZE)
  });
}
