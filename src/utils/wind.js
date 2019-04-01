const MAX_COMFORT_WIND_SPEED = 5;

/**
 * isComfortWindSpeed
 *
 * @param {number} windSpeed
 * @returns {boolean}
 */
export function isComfortWindSpeed(windSpeed) {
  return windSpeed <= MAX_COMFORT_WIND_SPEED;
}
