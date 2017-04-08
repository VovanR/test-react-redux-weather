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

/**
 * Returns wind speed name
 *
 * @example
 * // returns 'low'
 * getWindSpeedName(5);
 *
 * @param {Number} speed
 * @returns {String}
 */
export function getWindSpeedName(speed) {
  return speed > 7 ? 'high' :
         speed > 5 ? 'medium' :
                     'low';
}
