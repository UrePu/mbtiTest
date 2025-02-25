프로젝트 이름

소개

이 프로젝트는 퍼스널리티 테스트 웹 애플리케이션입니다. 사용자는 간단한 테스트를 통해 자신의 성향을 파악할 수 있습니다.

[<배포 링크>](https://mbti-test-pi.vercel.app/)

기능 소개:
메인페이지
  -로그인이 되어 있을때 바뀌는 헤더
  -로그인이 되어 있을때 누르는게 가능한 테스트 시작 버튼 
로그인페이지
  -로그인이 가능한 창과 회원가입 버튼
회원가입페이지
  -아이디 비밀번호 닉네임을 결정하면 회원가입 성공
마이페이지
  -닉네임 변경 기능
결과 보기
  -다른사람들의 결과 보기 가능
  -다른사람에게 내 결과를 공유하거나 숨길수있음.
검사 페이지
  -두가지의 선택지를 주고 20개의 선택지를 다 고르지 않으면 alert 띄움

기술 스택

프론트엔드: React, React Router, Context API, Tailwind CSS, Zustand

백엔드: JSON Server

빌드 도구: Vite

패키지 관리자: Yarn

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
