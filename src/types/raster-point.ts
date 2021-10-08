/**
 * Represents a point in the raster space of a backgroundmap image.
 * 
 * A RasterPoint's X coordinate is a number of pixels from the left side of the backgroundmap,
 * and its Y coordinate is a number of pixels from the bottom side of the backgroundmap.
 * (In both cases, 0 represents the bottom/left row/column of pixels.)
 *
 * Note that these are the left and bottom sides of the image itself, not just the part of the image that 
 * contains cells (the portion inside of the `gridBounds` for that backgroundmap.)
 *
 * Carries a reference to its backgroundmap because RasterPoint coordinates are specific to a backgroundmap.
 *
 * See also `types/raster-backgroundmap-metadata`
 */
function RasterPoint(x: Number, y: Number, bm: RasterBackgroundmapMetadata) {
  this.x = x;
  this.y = y;
  this.backgroundmap = bm;
  if(x < 0) {
    throw new Error ("RasterPoint instantiated with X coordinate left of its backgroundmap.");
  }
  if(x > bm.widthPixels) {
    throw new Error ("RasterPoint instantiated with X coordinate right of its backgroundmap.");
  }
  if(y < 0) {
    throw new Error ("RasterPoint instantiated with Y coordinate below its backgroundmap.");
  }
  if(y > bm.heightPixels) {
    throw new Error ("RasterPoint instantiated with Y coordinate above its backgroundmap.");
  }
}

/**
 * Checks that the given RasterPoint is inside of the backgroundmap's gridBounds.
 */
RasterPoint.prototype.insideBounds = function insideBounds() {
  if(rasterPoint.x < rasterPoint.backgroundmapMetadata.gridBounds[0][1]) {
    return false; // Too far west
  }
  if(rasterPoint.x > rasterPoint.backgroundmapMetadata.gridBounds[1][1]) {
    return false; // Too far east
  }
  if(rasterPoint.x > rasterPoint.backgroundmapMetadata.gridBounds[0][0]) {
    return false; // Too far north
  }
  if(rasterPoint.x < rasterPoint.backgroundmapMetadata.gridBounds[1][0]) {
    return false; // Too far south
  }
  return true;
}

export default RasterPoint;
