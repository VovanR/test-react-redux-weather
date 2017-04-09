import getWindSpeedName from './getWindSpeedName';

describe('getWindSpeedName', () => {
  it('should work with numbers', () => {
    expect(getWindSpeedName(0)).toBe('low');
    expect(getWindSpeedName(5)).toBe('low');
    expect(getWindSpeedName(6)).toBe('medium');
    expect(getWindSpeedName(7)).toBe('medium');
    expect(getWindSpeedName(8)).toBe('high');
  });
});
