import kmphToMps from './kmphToMps';

describe('kmphToMps', () => {
  it('should work with numbers', () => {
    expect(kmphToMps(5)).toBe(1);
    expect(kmphToMps(28.8)).toBe(8);
  });

  it('should work with strings', () => {
    expect(kmphToMps('21.6')).toBe(6);
  });
});
