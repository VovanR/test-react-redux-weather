import {isComfortCondition} from './condition';
import {isComfortTemperature} from './temperature';
import {isComfortWindSpeed} from './wind';

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
