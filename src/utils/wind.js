const maxComfortWindSpeed = 5;

/**
 * isComfortWindSpeed
 *
 * @param {number} windSpeed
 * @returns {boolean}
 */
export function isComfortWindSpeed(windSpeed) {
  return windSpeed <= maxComfortWindSpeed;
}
