## 1. craco.js 를 활용해 절대경로 설정

## 2. typescript 로 Props 정의 & Styled-Components 설치

yarn add styled-reset styled-components
yarn add @types/styled-components -D
-D 옵션을 주면 package.json > devDependencies 에 생성됨 -> 개발할 때만 사용할 패키지는 아래 옵션 사용하면 유용

GlobalStyle.ts 는 전역적으로 적용할 style 에 대해서 적용
내부 reset 은 기본으로 잡혀있는 css 초기화를 위해 사용
