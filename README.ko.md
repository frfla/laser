# LASER

**간단하고 빠르게 사용할 수 있는 자바스크립트, 타입스크립트 유틸리티**

```
npm install @frfla/laser
yarn add @frfla/laser
pnpm add @frfla/laser
```

## Array

- `type NotEmptyArray<T>` 비어있지 않은 배열을 표현하는 유틸리티 타입
- `type LastOf<T>` 배열의 마지막 원소를 표현하는 타입
- `type FirstOf<T>` 배열의 첫 원소를 표현하는 타입

## Function

- `noop()` 아무 동작도 하지 않는 함수
- `asyncNoop()` 아무 동작도 하지 않는 `Promise`를 리턴하는 함수
- `type NaryFn<A, B, ... N, R>` (`UnAry`, `Binary`, `Ternary`) 파라미터가 단 N개인 함수를 표현하는 유틸리티 타입. R을 리턴한다.

## Storage

- `type Serializable` 직렬화 가능한 자료형들을 표현하는 타입(로컬 스토리지에 저장할 데이터의 타입을 미리 검사할 수 있습니다)

## Object

- `objectKeys()` Object.keys에 Type Assertion이 적용된 함수
- `objectEntries()` Object.entries에 Type Assertion이 적용된 함수

## runtime

- `isServer()` 현재 실행 환경이 서버인지를 알려주는 함수
- `isClient()` 현재 실행 환경이 브라우저인지를 알려주는 함수
