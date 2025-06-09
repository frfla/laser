export type FirstOf<T extends readonly unknown[]> = T extends [infer F, ...infer _]
  ? F
  : never
