export type LastOf<T extends readonly unknown[]> = T extends [...infer _, infer L]
  ? L
  : never
