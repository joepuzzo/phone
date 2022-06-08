import { validatePhone } from './validatePhone';

describe('validatePhone', () => {

  const spy = jest.spyOn(console, 'warn').mockImplementation();

  afterEach(() => {
    spy.mockReset();
  })


  test('does not format an unknown country code', () => {
    expect(validatePhone('2015550123', 'JOE')).toBe(false)
    expect(console.warn).toBeCalledWith("intl-phone does not currently support country JOE.")
  });

  // USA ----------------------------------------------------------
  describe('USA', () => {

    test('validates a US mobile phone number', () => {
      expect(validatePhone('2015550123', 'US')).toBe(true)
    });
  
    test('validates a US landline phone number', () => {
      expect(validatePhone('2015550123', 'US')).toBe(true)
    });
  
    test('validates a US toll free phone number', () => {
      expect(validatePhone('8002345678', 'US')).toBe(true)
    });
  
    test('validates a partial US mobile phone number', () => {
      expect(validatePhone('2', 'US')).toBe(false)
    });
  
    test('returns false for a malformed US mobile phone number', () => {
      expect(validatePhone('1015550123', 'US')).toBe(false)
    });

    test('returns false for a formatted US mobile phone number', () => {
      expect(validatePhone('(201) 555-0123', 'US')).toBe(false)
    });
  
    test('returns false for a formatted US landline phone number', () => {
      expect(validatePhone('(201) 555-0123', 'US')).toBe(false)
    });
  
    test('returns false for a formatted US toll free phone number', () => {
      expect(validatePhone('(800) 234-5678', 'US')).toBe(false)
    });

  });


    // PR ----------------------------------------------------------
    describe('PR  ( Puerto Rico )', () => {

      test('validates a PR mobile phone number', () => {
        expect(validatePhone('7872345678', 'PR')).toBe(true)
      });
    
      test('validates a PR landline phone number', () => {
        expect(validatePhone('7872345678', 'PR')).toBe(true)
      });
    
      test('validates a PR toll free phone number', () => {
        expect(validatePhone('8002345678', 'PR')).toBe(true)
      });
    
      test('validates a partial PR mobile phone number', () => {
        expect(validatePhone('7', 'PR')).toBe(false)
      });
    
      test('returns false for a malformed PR mobile phone number', () => {
        expect(validatePhone('1872345678', 'PR')).toBe(false)
      });
  
    });

  // AE ----------------------------------------------------------
  describe('AE', () => {

    test('validates a AE mobile phone number', () => {
      expect(validatePhone('501234567', 'AE')).toBe(true)
    });

    test('validates a AE partial mobile phone number', () => {
      expect(validatePhone('50123', 'AE')).toBe(false)
    });
  
    test('validates a AE landline phone number', () => {
      expect(validatePhone('22345678', 'AE')).toBe(true)
    });

    test('validates a AE partial landline phone number', () => {
      expect(validatePhone('2234', 'AE')).toBe(false)
    });
  
    test('validates a AE toll free phone number', () => {
      expect(validatePhone('800123456', 'AE')).toBe(true)
    });
  
    test('validates a AE partial toll free phone number', () => {
      expect(validatePhone('8001', 'AE')).toBe(false)
    });
  
    test('returns false for a malformed AE mobile phone number', () => {
      expect(validatePhone('1015550123', 'AE')).toBe(false)
    });

  });

  // FR ( France ) -----------------------------------------------------
  describe('FR ( France )', () => {

    test('validates a FR mobile phone number', () => {
      expect(validatePhone('612345678', 'FR')).toBe(true)
    });

    test('validates a FR landline phone number', () => {
      expect(validatePhone('123456789', 'FR')).toBe(true)
    });

    test('validates a FR tollfree phone number', () => {
      expect(validatePhone('801234567', 'FR')).toBe(true)
    });

  });

   // IN ( India ) -----------------------------------------------------
   describe('IN ( India )', () => {

    test('validates a IN mobile phone number', () => {
      expect(validatePhone('8123456789', 'IN')).toBe(true)
    });

    test('validates a IN landline phone number', () => {
      expect(validatePhone('7410410123', 'IN')).toBe(true)
    });

    test('validates a IN tollfree phone number', () => {
      expect(validatePhone('1800123456', 'IN')).toBe(true)
    });

    test('validates a Google Mumbai - +91-22-6611-7200', () => {
      expect(validatePhone('2266117200', 'IN')).toBe(true)
    });

    test('validates a IN Google Gurgaon - +91-124-4512900', () => {
      expect(validatePhone('1244512900', 'IN')).toBe(true)
    });

  });

  // TR ( Turkey ) -----------------------------------------------------
  describe('TR ( Turkey )', () => {

    test('validates a TR mobile phone number', () => {
      expect(validatePhone('5012345678', 'TR')).toBe(true)
    });

    test('validates a TR landline phone number', () => {
      expect(validatePhone('2123456789', 'TR')).toBe(true)
    });

    test('validates a TR tollfree phone number', () => {
      expect(validatePhone('8001234567', 'TR')).toBe(true)
    });

  });

   // KR ( Korea ) -----------------------------------------------------
   describe('KR ( Korea )', () => {

    test('validates a KR mobile phone number', () => {
      expect(validatePhone('1020000000', 'KR')).toBe(true)
    });

    test('validates a KR landline phone number', () => {
      expect(validatePhone('22123456', 'KR')).toBe(true)
    });

    test('validates a KR tollfree phone number', () => {
      expect(validatePhone('801234567', 'KR')).toBe(true)
    });

    test('validates a KR phone number with zero at beginning', () => {
      expect(validatePhone('01079197869', 'KR')).toBe(false)
    });

    test('validates a KR phone number without zero at beginning', () => {
      expect(validatePhone('1079197869', 'KR')).toBe(true)
    });

  });

})

