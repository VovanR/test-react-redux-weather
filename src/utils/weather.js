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
  return isComfortCondition(weather.condition) &&
         isComfortWindSpeed(weather.windSpeed) &&
         isComfortTemperature(weather.temperature)
}
