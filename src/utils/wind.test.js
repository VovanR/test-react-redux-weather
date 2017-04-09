import {isComfortWindSpeed} from './wind';

describe('isComfortWindSpeed', () => {
  it('should returns `true`', () => {
    expect(isComfortWindSpeed(3)).toBeTruthy();
  });

  it('should returns `false`', () => {
    expect(isComfortWindSpeed(7)).toBeFalsy();
  });
});
