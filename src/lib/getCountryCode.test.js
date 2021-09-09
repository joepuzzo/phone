import { getCountryCode } from './getCountryCode';

describe('getCountryCode', () => {

  const spy = jest.spyOn(console, 'warn').mockImplementation();

  afterEach(() => {
    spy.mockReset();
  })


  test('does not return code for an unknown country', () => {
    expect(getCountryCode('JOE')).toBe(undefined);
    expect(console.warn).toBeCalledWith("intl-phone does not currently support country JOE")
  });

  // USA ----------------------------------------------------------
  describe('Known codes', () => {

    test('Returns 1 for US', () => {
      expect(getCountryCode('US')).toBe('1');
    });

    test('Returns 1 for CA ( Canada )', () => {
      expect(getCountryCode('CA')).toBe('1');
    });

    test('Returns 1 for PR  ( Puerto Rico )', () => {
      expect(getCountryCode('PR')).toBe('1');
    });

    test('Returns 33 for FR ( France )', () => {
      expect(getCountryCode('FR')).toBe('33');
    });

    test('Returns 91 for IN ( India )', () => {
      expect(getCountryCode('IN')).toBe('91');
    });

  });

})


