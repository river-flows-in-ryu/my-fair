# 마이페어 프론트엔드 과제
- todolist 만들기

---
## 기술스택
<div align=left>
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
   <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
   <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
   <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
</div>
<div align=left>
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> 
</div>
<div align=left>
  <img src="https://img.shields.io/badge/Testing Library-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white"> 
  <img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"> 
  <img src="https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"> 
</div>

### 기술 스택 사용 이유
- Emotion을 사용해본적이 없어 변경을 감행하였고, 아래와 같은 이유로 tailwind css 채택하였습니다.
  1. 변수명 관리의 부담 해소
  2. 빠른 스타일 적용 가능

- Testing Library
  - React 컴포넌트의 동작을 테스트하기 위하여 추가하였습니다.
- storybook
  - 컴포넌트를 확인하고 추후 ui 수정시 효율적 변경을 위하여 추가하였습니다.
  

## 의존성 패키지 설치
```
yarn install
```

## 개발 환경 실행
```
yarn run dev // 코드 실행

yarn run test  //테스트 실행

yarn run storybook // 스토리북 실행
```

## 파일 구조
```
📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📜layout.recoil.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┗ 📂pages
 ┃ ┃ ┃ ┣ 📜TodoListItem.tsx
 ┃ ┃ ┃ ┣ 📜TodoUserListPage.spec.ts
 ┃ ┃ ┃ ┗ 📜TodoUserListPage.tsx
 ┃ ┣ 📂public
 ┃ ┃ ┣ 📜Check.svg
 ┃ ┃ ┗ 📜Close.svg
 ┃ ┣ 📂stories
 ┃ ┃ ┣ 📜Button.stories.tsx
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜H1.stories.tsx
 ┃ ┃ ┣ 📜H1.tsx
 ┃ ┃ ┣ 📜Input.stories.tsx
 ┃ ┃ ┣ 📜Input.tsx
 ┃ ┃ ┣ 📜Page.stories.ts
 ┃ ┃ ┣ 📜Page.tsx
 ┃ ┃ ┣ 📜Todo.stories.tsx
 ┃ ┃ ┗ 📜Todo.tsx
 ┃ ┣ 📂test
 ┃ ┃ ┗ 📜TodoUserListPage.test.tsx
 ┃ ┗ 📜globals.css
 ┣ 📜.gitignore
 ┣ 📜README.md
 ┣ 📜babel.config.js
 ┣ 📜jest.config.js
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.js
 ┣ 📜tailwind.config.ts
 ┣ 📜tsconfig.json
 ┗ 📜yarn.lock
```
- src 디렉토리에서 app에는 page 단위 
- components/page 에는 해당 페이지의 컴포넌트들을 추가
- 만약 page 이름이 myPage 라면 components 하단에 myPage를 추가




## 간단 회고

- 한글은 조합형 문자라 react에서는 계속 작성하려하여 이를 방지하는 event.nativeEvent.isComposing을 배우게 되었습니다.

- 모든 테스팅 라이브러리를 처음으로 도입해보았습니다.<p/>
익숙하지 않아서 어려운 부분도 있었지만 테스팅의 중요성과 활용 이유를 찾게된것같습니다. <p/>
새로운 지식을 습득하게 되어 재밌었고 더욱 개선해야한다는 점도 많이 느꼈습니다.
