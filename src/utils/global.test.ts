import { isExpiredToken } from './global';

describe('isExpiredToken function', () => {
  it('should return true if is expired', () => {
    expect(isExpiredToken(1593556252)).toEqual(true);
  });

  it('should return false if not expired', () => {
    const today = new Date();
    expect(isExpiredToken(today.setDate(today.getDate() + 1))).toEqual(false);
  });
});
