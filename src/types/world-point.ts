/**
 * Specifies a location in Morrowind worldspace.
 *
 * Morrowind locations are recorded as [x, y, z] coordinate triplets where each coordinate is a signed 32-bit floating-point number.
 * Fortunately, Javascript's `Number` type is 64 bits, and signed, so no measures need to be taken to deal with the format of the numbers.
 * (OpenMW may support more expressive int
 *
 * The Z coordinate is mostly unimportant for our purposes, but it's retained for two reasons:
 * 1. To more closely match the data structure in Morrowind itself
 * 2. To make `WorldPoint`s and `CellXY`s easily differentiable when unboxed.
 */
function WorldPoint(unboxedWorldPoint) {
  this.x = unboxedWorldPoint.x;
  this.y = unboxedWorldPoint.y;
  this.z = unboxedWorldPoint.z;
}

export default WorldPoint;
