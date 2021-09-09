import { formatPhone } from './formatPhone';

describe('formatPhone', () => {

  const spy = jest.spyOn(console, 'warn').mockImplementation();

  afterEach(() => {
    spy.mockReset();
  })


  test('does not format an unknown country code', () => {
    expect(formatPhone('2015550123', 'JOE')).toBe("2015550123");
    expect(console.warn).toBeCalledWith("intl-phone does not currently support country JOE, so the value passed was returned.")
  });

  // USA ----------------------------------------------------------
  describe('USA', () => {

    test('formats a US mobile phone number', () => {
      expect(formatPhone('2015550123', 'US')).toBe("(201) 555-0123");
    });
  
    test('formats a US landline phone number', () => {
      expect(formatPhone('2015550123', 'US')).toBe("(201) 555-0123");
    });
  
    test('formats a US toll free phone number', () => {
      expect(formatPhone('8002345678', 'US')).toBe("(800) 234-5678");
    });
  
    test('formats a partial US mobile phone number', () => {
      expect(formatPhone('2', 'US')).toBe("(2");
    });
  
    test('does not format a malformed US mobile phone number', () => {
      expect(formatPhone('1015550123', 'US')).toBe("1015550123");
      expect(console.warn).toBeCalledWith("The value 1015550123 does not match any formats.")
    });

  });


    // PR ----------------------------------------------------------
    describe('PR  ( Puerto Rico )', () => {

      test('formats a PR mobile phone number', () => {
        expect(formatPhone('7872345678', 'PR')).toBe("(787) 234-5678");
      });
    
      test('formats a PR landline phone number', () => {
        expect(formatPhone('7872345678', 'PR')).toBe("(787) 234-5678");
      });
    
      test('formats a PR toll free phone number', () => {
        expect(formatPhone('8002345678', 'PR')).toBe("(800) 234-5678");
      });
    
      test('formats a partial PR mobile phone number', () => {
        expect(formatPhone('7', 'PR')).toBe("(7");
      });
    
      test('does not format a malformed PR mobile phone number', () => {
        expect(formatPhone('1872345678', 'PR')).toBe("1872345678");
        expect(console.warn).toBeCalledWith("The value 1872345678 does not match any formats.")
      });
  
    });

  // AE ----------------------------------------------------------
  describe('AE', () => {

    test('formats a AE mobile phone number', () => {
      expect(formatPhone('501234567', 'AE')).toBe("50 123 4567");
    });

    test('formats a AE partial mobile phone number', () => {
      expect(formatPhone('50123', 'AE')).toBe("50 123");
    });
  
    test('formats a AE landline phone number', () => {
      expect(formatPhone('22345678', 'AE')).toBe("2 234 5678");
    });

    test('formats a AE partial landline phone number', () => {
      expect(formatPhone('2234', 'AE')).toBe("2 234");
    });
  
    test('formats a AE toll free phone number', () => {
      expect(formatPhone('800123456', 'AE')).toBe("800 123456");
    });
  
    test('formats a AE partial toll free phone number', () => {
      expect(formatPhone('80012', 'AE')).toBe("800 12");
    });
  
    test('does not format a malformed AE mobile phone number', () => {
      expect(formatPhone('1015550123', 'AE')).toBe("1015550123");
      expect(console.warn).toBeCalledWith("The value 1015550123 does not match any formats.")
    });

  });

  // AE ( France ) -----------------------------------------------------
  describe('FR ( France )', () => {

    test('formats a FR mobile phone number', () => {
      expect(formatPhone('612345678', 'FR')).toBe("6 12 34 56 78");
    });

    test('formats a FR landline phone number', () => {
      expect(formatPhone('123456789', 'FR')).toBe("1 23 45 67 89");
    });

    test('formats a FR toll_free phone number', () => {
      expect(formatPhone('801234567', 'FR')).toBe("801 23 45 67");
    });

  });

   // IN ( India ) -----------------------------------------------------
   describe('IN ( India )', () => {

    test('formats a IN mobile phone number', () => {
      expect(formatPhone('8123456789', 'IN')).toBe("81234 56789");
    });

    test('formats a IN landline phone number', () => {
      expect(formatPhone('7410410123', 'IN')).toBe("74104 10123");
    });

    test('formats a IN toll_free phone number', () => {
      expect(formatPhone('1800123456', 'IN')).toBe("1800 12345");
    });

    test('formats a Google Mumbai - +91-22-6611-7200', () => {
      expect(formatPhone('2266117200', 'IN')).toBe("22 6611 7200");
    });

    test('formats a IN Google Gurgaon - +91-124-4512900', () => {
      expect(formatPhone('1244512900', 'IN')).toBe("124 451 2900");
    });

    test('formats a IN Tesla - +91-80-48149455', () => {
      expect(formatPhone('8048149455', 'IN')).toBe("80 4814 9455");
    });

  });

  // KR ( Korea ) -----------------------------------------------------
  describe('KR ( Korea )', () => {

    test('formats a IN mobile phone number', () => {
      expect(formatPhone('1092790634', 'KR')).toBe("10-9279-0634");
    });

  });

})


