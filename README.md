# LASER

**Straightforward Javascript/TypeScript Utilities**

```
npm install @frfla/laser
yarn add @frfla/laser
pnpm add @frfla/laser
```

## Array

- `type NotEmptyArray<T>` A utility type that represents an array guaranteed to have at least one
- `type LastOf<T>` A utility type that represents the last element of array
- `type FirstOf<T>` A utility type that represents the first element of array

## Function

- `noop()` A function that performs no action
- `asyncNoop()` A function that returns a Promise which resolves immediately and performs no action
- `type NaryFn` A utility type that represents a function taking exactly N parameter(s). (1 <= N <= 3).

## Object

- `objectKeys()` Typed wrapper around Object.keys that preserves the key types
- `objectEntries()` Typed wrapper around Object.entries that preserves key‑value types

## Storage

- `type Serializable` A utility type that represents serializable thing

## Runtime

- `isServer()` Indicates whether the current execution context is a server environment
- `isClient()` Indicates whether the current execution context is a browser (client) environment
