/**
 * Convert km/h to m/s
 * {@link https://jsfiddle.net/VovanR/9L6np6bv/}
 * @version 1.0.1
 *
 * @param {number|string} kmph
 * @returns {number}
 *
 * @example
 * kmphToMps(5);
 * //=> 1
 */
export default function kmphToMps(kmph) {
  return (0.5 + (kmph * 0.28)) << 0;
}
