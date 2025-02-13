/**
 * A TypeScript utility type that enforces only one or none specified properties of a given type to be present.
 */
export type AtMostOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: { [P in K]: T[K] } & Partial<Record<Exclude<Keys, K>, never>>;
}[Keys];

/**
 * A TypeScript utility type that enforces exactly one specified property of a given type to be present.
 */
export type ExactlyOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: {
    [P in K]-?: T[P];
  } & {
    [P in Exclude<Keys, K>]?: never;
  } & Omit<T, Keys>;
}[Keys];
