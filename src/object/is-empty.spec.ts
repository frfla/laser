import { isEmpty } from './is-empty'

describe('is-empty', () => {
  test(`Cases that values are null, undefined, and ""(empty string)`, () => {
    expect(isEmpty(null)).toBe(true)
    expect(isEmpty(undefined)).toBe(true)
    expect(isEmpty('')).toBe(true)
  })
  test('Cases that values are basic primitive falsy values', () => {
    expect(isEmpty(0)).toBe(false)
    expect(isEmpty(false)).toBe(false)
  })
  test('Cases that values are array or object that contains empty values', () => {
    expect(isEmpty([])).toBe(true)
    expect(isEmpty({})).toBe(true)
    expect(isEmpty([undefined])).toBe(true)
    expect(isEmpty(['undefined'])).toBe(false)
    expect(isEmpty([null])).toBe(true)
    expect(isEmpty({ a: 0 })).toBe(false)
    expect(isEmpty({ a: '' })).toBe(true)
  })
  test('Cases that values are nested object', () => {
    expect(isEmpty([{}])).toBe(true)
    expect(isEmpty([[]])).toBe(true)
    expect(isEmpty([{ a: [], b: null }, [{}, undefined]])).toBe(true)
    expect(isEmpty({ a: {}, b: '' })).toBe(true)
    expect(isEmpty({ a: { b: { c: '' } } })).toBe(true)
    expect(isEmpty({ a: { b: { d: '' }, c: 0 } })).toBe(false)
  })
})
