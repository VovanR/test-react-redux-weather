import {isComfortWeather} from './weather';

describe('isComfortWeather', () => {
  it('should returns `true`', () => {
    const weather = {
      condition: 'Clear',
      temperature: 15,
      windSpeed: 3
    }
    expect(isComfortWeather(weather)).toBeTruthy();
  });

  it('should returns `false`', () => {
    expect(isComfortWeather({
      condition: 'Rain',
      temperature: 15,
      windSpeed: 3
    })).toBeFalsy();

    expect(isComfortWeather({
      condition: 'Clear',
      temperature: 5,
      windSpeed: 3
    })).toBeFalsy();

    expect(isComfortWeather({
      condition: 'Clear',
      temperature: 15,
      windSpeed: 10
    })).toBeFalsy();
  });
});
