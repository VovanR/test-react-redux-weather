const minComfortTemperature = 10;

/**
 * isComfortTemperature
 *
 * @param {number} temperature
 * @returns {boolean}
 */
export function isComfortTemperature(temperature) {
  return temperature >= minComfortTemperature;
}
