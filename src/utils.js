/**
 * Convert km/h to m/s
 *
 * @see {@link https://jsfiddle.net/VovanR/9L6np6bv/}
 *
 * @example
 * // returns 1
 * kmphToMps(5);
 *
 * @param {Number|String} kmph
 * @returns {Number}
 */
export function kmphToMps(kmph) {
  return (0.5 + (kmph * 0.28)) << 0;
}
