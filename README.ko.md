# LASER

**간단하고 빠르게 사용할 수 있는 자바스크립트, 타입스크립트 유틸리티**

```
npm install @frfla/laser
yarn add @frfla/laser
pnpm add @frfla/laser
```

## Array

- `type NotEmptyArray<T>` 비어있지 않은 배열을 표현하는 유틸리티 타입

## Function

- `noop()` 아무 동작도 하지 않는 함수
- `asyncNoop()` 아무 동작도 하지 않는 `Promise`를 리턴하는 함수

## Object

- `objectKeys()` Object.keys에 Type Assertion이 적용된 함수
- `objectEntries()` Object.entries에 Type Assertion이 적용된 함수

## runtime

- `isServer()` 현재 실행 환경이 서버인지를 알려주는 함수
- `isClient()` 현재 실행 환경이 브라우저인지를 알려주는 함수
