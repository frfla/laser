import { Entries } from './entries.types'

/**
 * Alternative of Object.Entries() with type assertion
 * @example objectEntries({ a : 1 }) // [['a', 1]]
 */
export const objectEntries = <T extends Object>(obj: T) =>
  Object.entries(obj) as Entries<T>
