import {isComfortTemperature} from './temperature';

describe('isComfortTemperature', () => {
  it('should returns `true`', () => {
    expect(isComfortTemperature(10)).toBeTruthy();
  });

  it('should returns `false`', () => {
    expect(isComfortTemperature(1)).toBeFalsy();
  });
});
