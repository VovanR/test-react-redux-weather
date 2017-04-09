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
export default function getWindSpeedName(speed) {
  return speed > 7 ? 'high' :
         speed > 5 ? 'medium' :
                     'low';
}
