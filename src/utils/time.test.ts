import { unixTimestamp } from './time';

describe('unixTimestamp function', () => {
  it('should convert to unix timestamp', () => {
    expect(unixTimestamp(1593556252)).toEqual(1593556);
  });
});
