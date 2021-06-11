import { canLogin } from './loginUtils'

describe('should test logic logic', () => {
  describe('{canLogin} logic tests', () => {
    it('{canLogin} should return TRUE if {isValid} is TRUE and {isBanned} is FALSE', () => {
      expect(canLogin({ isValid: true, isBanned: false })).toEqual(true)
      expect(canLogin({ isValid: 1, isBanned: 0 })).toEqual(true)
      expect(
        canLogin({ isValid: true, isBanned: false, name: 'Mario' })
      ).toEqual(true)
      expect(
        canLogin({
          isValid: true,
          isBanned: false,
          emai: 'whatever@hotmail.com',
        })
      ).toEqual(true)
    })

    it('{canLogin} should return FALSE if {isValid} if dirty data', () => {
      expect(canLogin()).toEqual(false)
      expect(canLogin({})).toEqual(false)
      expect(canLogin([])).toEqual(false)
      expect(canLogin(undefined)).toEqual(false)
      expect(canLogin(null)).toEqual(false)
      expect(canLogin('')).toEqual(false)
      expect(canLogin(false)).toEqual(false)
      expect(canLogin(NaN)).toEqual(false)
    })

    it('{canLogin} should return FALSE params are truth not unusable', () => {
      expect(canLogin(99)).toEqual(false)
      expect(canLogin('ewrwrwrwe')).toEqual(false)
      expect(canLogin(true)).toEqual(false)
    })

    it('{canLogin} should return FALSE if {isValid} shape matches but not the desired values', () => {
      expect(canLogin({ isValid: true, isBanned: true })).toEqual(false)
      expect(canLogin({ isValid: false, isBanned: false })).toEqual(false)
      expect(canLogin({ isValid: true, isBanned: null })).toEqual(false)
      expect(canLogin({ isValid: 'true', isBanned: 'false' })).toEqual(false)
      expect(canLogin({ isValid: 'HELLO', isBanned: null })).toEqual(false)
    })
  })
})
