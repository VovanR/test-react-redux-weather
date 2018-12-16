import {isComfortCondition} from './condition';
import {isComfortTemperature} from './temperature';
import {isComfortWindSpeed} from './wind';

/**
 * isComfortWeather
 *
 * @param {object} weather
 * @param {string} weather.condition
 * @param {number} weather.temperature
 * @param {number} weather.windSpeed
 * @returns {boolean}
 */
export function isComfortWeather(weather) {
  if (
    !isComfortCondition(weather.condition) ||
    !isComfortTemperature(weather.temperature) ||
    !isComfortWindSpeed(weather.windSpeed)
  ) {
    return false;
  }

  return true;
}
