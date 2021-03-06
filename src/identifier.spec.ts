import { isValid } from './identifier'

// Test cases created to cover equivalence classes:
// ("1234", false) - Starts with a letter
// ("a12^34", false) - Contains only letters or digits
// ("", false) - len(S) = 0
// ("a12345678", false) - len(S) > 6
// (null, false) - String is null
// ("a1234", true) - valid identifier

describe('Identifier validator', () => {
  test('should return true if string is a valid identifier', () => {
    const ret = isValid('a1234')
    expect(ret).toEqual(true)
  })

  test('should return false if string does not start with a letter', () => {
    const ret = isValid('1234')
    expect(ret).toEqual(false)
  })

  test('should return false if string contains invalid character', () => {
    const ret = isValid('a12^34')
    expect(ret).toEqual(false)
  })

  test('should return false if string is empty', () => {
    const ret = isValid('')
    expect(ret).toEqual(false)
  })

  test('should return false if string exceeds valid length', () => {
    const ret = isValid('a12345678')
    expect(ret).toEqual(false)
  })

  test('should return false if string is null', () => {
    const ret = isValid(null)
    console.log(ret)
    expect(ret).toEqual(false)
  })

  test('should return true with valid identifier with length 1', () => {
    const ret = isValid('i')
    expect(ret).toEqual(true)
  })

  test('should return true with valid identifier with length 6', () => {
    const ret = isValid('a12345')
    expect(ret).toEqual(true)
  })
})
