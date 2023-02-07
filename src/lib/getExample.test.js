import { getExample } from './getExample';

describe('getExample', () => {

  const spy = jest.spyOn(console, 'warn').mockImplementation();

  afterEach(() => {
    spy.mockReset();
  })


  test('does not return code for an unknown country', () => {
    expect(getExample('JOE')).toBe(undefined);
    expect(console.warn).toBeCalledWith("intl-phone does not currently support country JOE")
  });

  // USA ----------------------------------------------------------
  describe('Known codes', () => {

    test('Returns 2015550123 for US fixed', () => {
      expect(getExample('US', 'fixed')).toBe('2015550123');
    });

    test('Returns 2015550123 for US mobile', () => {
      expect(getExample('US', 'mobile')).toBe('2015550123');
    });

    test('Returns 2015550123 for US tollfree', () => {
      expect(getExample('US', 'tollfree')).toBe('8002345678');
    });

  });

   // Mexico ----------------------------------------------------------
   describe('Mexico', () => {

    test('Returns 12221234567 for MX mobile', () => {
      expect(getExample('MX', 'mobile')).toBe('12221234567');
    });
    
  });

})


