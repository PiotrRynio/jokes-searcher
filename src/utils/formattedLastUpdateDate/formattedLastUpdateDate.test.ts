import { formattedLastUpdateDate } from './formattedLastUpdateDate';

describe('formattedLastUpdateDate', () => {
  // 01.05.2022
  const testDate = new Date('2022-05-01T00:00:00.000Z');

  it('should return date in correct format', () => {
    // given
    jest.useFakeTimers().setSystemTime(new Date('2022-06-15'));

    // when
    const result = formattedLastUpdateDate(testDate);

    // then
    expect(result).toBe('1 May 2022');
  });
});
