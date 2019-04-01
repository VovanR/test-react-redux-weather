const MIN_COMFORT_TEMPERATURE = 10;

/**
 * isComfortTemperature
 *
 * @param {number} temperature
 * @returns {boolean}
 */
export function isComfortTemperature(temperature) {
  return temperature >= MIN_COMFORT_TEMPERATURE;
}
