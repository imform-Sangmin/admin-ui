# admin-ui

📌 커스텀에 제약 있는 라이브러리 사용 지양

## Front

### Next

- 확장성이 좋고 커스터마이징 및 자유도가 높다
- 커뮤니티 형성이 잘 되어있고 큰 프로젝트에 용이하다

---

## UI 라이브러리

### shadcn ui

- custom이 쉽다
- 모듈 전체 설치하여 사용하는 것이 아닌 필요한 컴포넌트만 복사하여 사용

### tailwindCSS

- 미리 정의된 클래스 사용하여 클래스 충돌 문제를 방지할 수 있다
- 일관된 스타일 가이드를 제공하여 개발자간 코드가 통일성이 있다
- 브라우저 캐싱에 유리하며, 빠른 로딩 시간 제공 (styled-components는 런타임에 스타일을 생성하기 때문에 캐싱 전략이 어렵다)

---

## Component 설계

- 독립적, 재사용이 가능하고, 관심사를 분리하여 설계
- 하나의 모듈은 하나의 역할을 담당해야한다 → 사용자나 이해 관계자 등의 변경을 요청하는 사람들을 중심으로 책임을 분리한다
- 인터페이스를 사용에 맞게끔 각기 분리해야한다 → 사용하지 않는 인터페이스는 구현하지 말아야 한다

---

## Folder Structure 설계

```
my-next-app/
│
├── .next/                         # 빌드 생성 디렉터리
│   ├── cache/
│   └── ...
│
├── public/                        # 정적 파일을 저장하는 디렉터리
│   ├── favicon.ico
│   └── logo.png
│
└── src/
    ├── apis/                      # API 호출과 관련된 로직 라이브러리
    │   ├── userApi.js
    │   └── postApi.js
    │
    ├── assets/                    # 다양한 미디어 자원을 저장하는 디렉터리
    │   ├── images/
    │   └── icons/
    │
    ├── components/                # 재사용 가능한 UI 컴포넌트를 저장하는 디렉터리
    │   ├── Header.js
    │   ├── Footer.js
    │   └── page-components/       # 특정 페이지에서만 사용되는 컴포넌트를 저장하는 디렉터리
    │       ├── HomePageComponents/
    │       └── AboutPageComponents/
    │
    ├── hooks/                     # 커스텀훅을 저장하는 디렉터리
    │   ├── useTimeFormat.js
    │   └── ...
    │
    ├── lib/                       # 외부 라이브러리 또는 프로젝트 내부에서 사용하는 유틸리티 함수
    │   ├── util.js
    │   └── helper.js
    │
    ├── page-components/           # 특정 페이지에서만 사용되는 컴포넌트를 저장하는 디렉터리
    │   ├── HomePageComponents/
    │   └── AboutPageComponents/
    │
    ├── pages/                     # 페이지 컴포넌트를 저장하는 디렉터리
    │   ├── _app.js
    │   ├── _document.js
    │   └── index.js
    │
    ├── mocks/                     # 더미 객체를 저장하는 디렉터리 (api 연결 전에 테스트)
    │   ├── handler.js
    │   └── ...
    │
    ├── styles/                     # css 관리하는 디렉터리
    │   └── globals.css
    │
    └── stores/                    # store 관리하는 디렉터리
        ├── store.ts
        └── ...
```

- assets : 스타일링에 필요한 에셋을 담는다. images, icons 등
- components : 버튼이나 모달 등의 필요한 ui 컴포넌트 블록을 관리한다.
- pages : 라우팅되는 각각의 페이지를 담고 있다. 각 페이지는 상태 혹은 동기 화 및 호출에 필요한 내용을 담고 있으며, 다양한 컴포넌트 단위로 이루어진다.
- hooks : 커스텀된 훅을 관리하는 폴더로, 유용하게 여러 커스텀 훅을 하나로 관리해 여러 프로젝트에 적용할 수 있다.
- apis : api 통신을 담당하는 코드

[참고 1](https://dlxl-min.tistory.com/87)
[참고 2](https://velog.io/@ni_market_dev/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%94%94%EB%A0%89%ED%84%B0%EB%A6%AC-%EA%B5%AC%EC%A1%B0-%EA%B7%9C%EC%B9%99)

---

## ETC Dependencies

### HTTP

#### axios

- fetch보다 더 많은 기능 제공
- json 자동 적용하여 response 객체를 바로 반환
- data 바로 전달
- 중도 cancel, 응답시간 초과 설정 등의 기능이 있다.
- error 발생시에 reject로 response를 전달해 catch로 잡아낼 수 있다.

#### tanstack query (react-query)

- 장기 실행 쿼리를 중지하기 위한 쿼리 취소 기능이 있다
- 쿼리 키를 지정하여 데이터 캐시 -> 이후 요청부터는 캐시된 데이터 사용 -> 중복 요청을 줄일 수 있다.
- 캐시한 데이터에 staleTime 옵션으로 지정하여 데이터가 신선한지 상했는지 여부 판단하여 stale 상태이면 서버에 재요청하여 데이터 업데이트

---

### Date

#### dayjs

- 날짜에 대한 많은 기능이 필요하지 않아보여 굳이 무거운 라이브러리보단 가벼운 라이브러리 사용

---

### Excel

#### exceljs

- 엑셀 파일 커스텀이 자유롭다
- 사용방법이 sheetjs 보다는 간단해보인다
- sheetjs는 몇몇 기능(스타일링, 이미지 등)이 유료이다

---

### Form Handler

#### react-hook-form

- 번들 크기가 가장 작음
- 종속성이 없다
- 가장 빠른 속도
- Uncontrolled 방식으로 동작 → 리렌더링 횟수를 줄일 수 있지만 사용자 입력 값을 제어하기 어렵다 → 원하는 값이 변경되었는지 감시할 수 있는 watch라는 기능 제공

---

### Toast Notification

#### react-toastify

- 커스텀하기 쉽다 (다양한 설정 옵션)
- 다양한 애니메이션 지원
- 비동기 지원
- 포커싱 되면 자동으로 멈춰준다

---

### Global State

#### recoil

- useState 훅과 비슷하게 동작하는 직관적이면서 간단한 구조 (Redux는 사용방법이 복잡하고 비동기 요청을 위한 라이브러리 필요)
- Selector로 비동기 처리 가능 (Redux는 미들웨어 따로 설치, Zustand도 비동기 처리가 가능하지만 Recoil만큼의 기본 지원은 없다)
- Tree Shaking 사용하지 않는 상태와 로직은 번들에서 제거되어 성능 최적화
- 복잡한 상태 관리에 유리하다 (Zustand는 간단한 API로 작은 규모의 프로젝트에 적합)
