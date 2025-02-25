프로젝트 이름

소개

이 프로젝트는 퍼스널리티 테스트 웹 애플리케이션입니다. 사용자는 간단한 테스트를 통해 자신의 성향을 파악할 수 있습니다.

[<배포 링크>](https://mbti-test-pi.vercel.app/)

기술 스택

프론트엔드: React, React Router, Context API, Tailwind CSS

백엔드: JSON Server

빌드 도구: Vite

패키지 관리자: Yarn

디렉토리 구조

`.
├── src
│   ├── api
│   │   ├── auth.js
│   │   ├── testResults.js
│   ├── components
│   │   ├── layout
│   ├── context
│   │   ├── AuthContext.jsx
│   ├── data
│   │   ├── questions.js
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Profile.jsx
│   │   ├── Question.jsx
│   │   ├── Result.jsx
│   │   ├── Results.jsx
│   │   ├── SignUp.jsx
│   ├── shared
│   │   ├── Router.jsx
│   ├── store
│   │   ├── myTypeStore.js
│   ├── utils
│   ├── styles
│   │   ├── App.css
│   │   ├── index.css
│   ├── App.jsx
│   ├── main.jsx
├── public
│   ├── index.html
├── config
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── postcss.config.js
├── server
│   ├── server.js
│   ├── db.json
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── yarn.lock`


설치 및 실행 방법

1. 프로젝트 클론

git clone [<repository-url>](https://github.com/UrePu/mbtiTest)
cd <project-folder>

2. 패키지 설치

yarn install

3. 개발 서버 실행

yarn dev

4. JSON 서버 실행 (테스트 데이터 사용 시)

yarn server

주요 기능

회원가입 및 로그인 기능 (인증 처리)

성격 테스트 문항 제공 및 결과 분석

테스트 결과 저장 및 조회

사용자 프로필 페이지

라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
