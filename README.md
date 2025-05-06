# LASER

**Straightforward Javascript/TypeScript Utilities**

```
npm install @frfla/laser
yarn add @frfla/laser
pnpm add @frfla/laser
```

## Array

- `type NotEmptyArray<T>` Utility type that represents an array guaranteed to have at least one element

## Function

- `noop()` Function that performs no action
- `asyncNoop()` Function that returns a Promise which resolves immediately and performs no action

## Object

- `objectKeys()` Typed wrapper around Object.keys that preserves the key types
- `objectEntries()` Typed wrapper around Object.entries that preserves key‑value types

## Runtime

- `isServer()` Indicates whether the current execution context is a server environment
- `isClient()` Indicates whether the current execution context is a browser (client) environment
