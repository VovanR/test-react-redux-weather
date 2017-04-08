import {kmphToMps, getWindSpeedName} from './utils';

describe('kmphToMps', () => {
  it('should work with numbers', () => {
    expect(kmphToMps(5)).toBe(1);
    expect(kmphToMps(28.8)).toBe(8);
  });

  it('should work with strings', () => {
    expect(kmphToMps('21.6')).toBe(6);
  });
});

describe('getWindSpeedName', () => {
  it('should work with numbers', () => {
    expect(getWindSpeedName(0)).toBe('low');
    expect(getWindSpeedName(5)).toBe('low');
    expect(getWindSpeedName(6)).toBe('medium');
    expect(getWindSpeedName(7)).toBe('medium');
    expect(getWindSpeedName(8)).toBe('high');
  });
});
