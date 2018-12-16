/**
 * Returns wind speed name
 *
 * @param {number} speed
 * @returns {string}
 *
 * @example
 * getWindSpeedName(5);
 * //=> 'low'
 */
export default function getWindSpeedName(speed) {
  return speed > 7 ? 'high' :
         speed > 5 ? 'medium' :
                     'low';
}
