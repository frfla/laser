export type NotEmptyArray<T> = [T, ...T[]]
//Exclude<T[], []> doesn't works b.c of []
