프로젝트 이름

소개

이 프로젝트는 퍼스널리티 테스트 웹 애플리케이션입니다. 사용자는 간단한 테스트를 통해 자신의 성향을 파악할 수 있습니다.

기술 스택

프론트엔드: React, React Router, Context API, Tailwind CSS

백엔드: JSON Server

빌드 도구: Vite

패키지 관리자: Yarn

디렉토리 구조

.
├── src
│ ├── api
│ ├── components
│ │ ├── layout
│ ├── context
│ ├── data
│ ├── pages
│ ├── shared
│ ├── store
│ ├── utils
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .gitignore
├── README.md
├── db.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── server.js
├── tailwind.config.js
├── vite.config.js
├── yarn.lock

설치 및 실행 방법

1. 프로젝트 클론

git clone <repository-url>
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

환경 변수 설정 (.env)

.env 파일을 생성하여 필요한 환경 변수를 설정합니다.

예제:

VITE_API_URL=http://localhost:5000

배포

Vite를 사용하여 빌드한 후 배포할 수 있습니다.

yarn build

라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
