/**
 * Alternative of Object.keys() with type assertion
 * @example objectKeys({ a : 1 }) // ['a']
 */
export const objectKeys = <T extends Object>(obj: T) => Object.keys(obj) as Array<keyof T>
