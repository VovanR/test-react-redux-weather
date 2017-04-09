import {
  variativeConditionVariantList,
  variativeConditionList,
  regularConditionList,
  availableConditionList,
  isComfortCondition
} from './condition';

describe('availableConditionList', () => {
  it('should work with numbers', () => {
    const variantLength = variativeConditionList.length * (variativeConditionVariantList.length + 1) + regularConditionList.length;
    expect(availableConditionList.length).toBe(variantLength);
  });
});

describe('isComfortCondition', () => {
  it('should returns `true`', () => {
    expect(isComfortCondition('Clear')).toBeTruthy();
  });

  it('should returns `false`', () => {
    expect(isComfortCondition('Rain')).toBeFalsy();
  });
});
