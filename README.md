# Github Issue Store Website (Gitssue)

## 📕 프로젝트 목표

#### 내가 자주 가는 GitHub의 Public Repository의 Issue들을 모아서 볼 수 있는 사이트 개발 (Github Open API 활용)

</br>
</br>

## ✋ 프로젝트 링크

<h3><a href='https://leafy-cendol-cc2796.netlify.app/'>데모 사이트 보러가기</a></h3>

</br>
</br>

## ✋ 프로젝트 실행 방법

```
1. .env (루트 디렉토리에 생성 후 저장)

해당 키가 readme나 코드에 노출 될 경우 키가 자동 파기 되므로 이메일에 첨부하여 드렸습니다.
```

```
2. 프로젝트 실행

> npm i
> npm run start
```

</br>
</br>

## ✨ 기술 스택

- react
- typescript
- styled-components (style)
- react-router-dom (route)
- axios (api)
- react-icons (icon)
- react-query (server-state)
- react-helmet-async (head title)

</br>
</br>

## ✨ 프로젝트 요구사항 및 구현 내용

1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
2. 검색된 Public Repository를 등록할 수 있다.
   - 등록 개수는 최대 4개로 제한하며, 최대 개수 초과 등록 시 이를 사용자에게 알려준다.
   - 웹은 LocalStorage, 앱은 Async Storage 등 로컬 저장소를 활용한다. (웹 혹은 앱 선택)
3. 등록된 Repository를 삭제할 수 있다.
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
   - 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.
   - 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
   - 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

</br>
</br>

### ※ **디자인은 따로 라이브러리를 사용 하지 않고 커스텀으로 심플하게 꾸몄습니다.**
### **★ 1번, 2번의 요구 사항을 고려한 구현 내용**

- 레포지토리 검색 기능
- 검색한 해당 레포지토리의 로컬 스토리지 저장/삭제 기능
- 로컬 스토리지에 4개 이상 저장되어 있을 경우 추가 할 시 유저에게 alert 경고창 알림
- 적절한 UI/UX 구성
- 페이지 로드시 Input 포커싱 (추가)
- 검색한 해당 레포지토리가 없을 경우 안내 텍스트를 띄워 유저에게 표시 (추가)
- 비동기 api 호출 및 로딩 처리 (추가)

![image](https://user-images.githubusercontent.com/54323527/189613873-d874dccf-a760-4c8d-a2ab-c393b89c4247.png)
![image](https://user-images.githubusercontent.com/54323527/189613994-7fd440a6-bc65-4d11-9389-fba8826b9414.png)

### **★ 3번의 요구 사항을 고려한 구현 내용**

- 로컬스토리지에 저장되어 있는 사용자의 레포 정보 리스트 형식으로 나열
- 해당 레포지토리 제목 클릭 시 깃헙 레포지토리로 이동
- 불필요한 레포지토리 삭제 기능

![image](https://user-images.githubusercontent.com/54323527/189614081-3414670a-bc79-4b15-b8d5-2b65657b7b66.png)

### **★ 4번의 요구 사항을 고려한 구현 내용**

- 페이지네이션에 필요한 query api 데이터 가공
- 저장되어 있는 레포지토리의 이슈들을 모아서 리스트 페이지네이션 형식으로 나열
- 각 브랜치에 따른 이슈들 노출, 해당하는 이슈 클릭 시 깃헙 이슈 상세페이지로 이동
- 추가적인 코멘트 갯수나 바디부분의 내용 필요할 것 같아서 추가

![image](https://user-images.githubusercontent.com/54323527/189614138-702cfbfb-a06b-4f52-9512-0909e4e4b660.png)

</br>
</br>

## ✨ 프로젝트 구조

```
src
 ┣ components
 ┃ ┣ Common
 ┃ ┃ ┣ EmptyDataWrapper.tsx
 ┃ ┃ ┣ Header.tsx
 ┃ ┃ ┣ HeadInfo.tsx
 ┃ ┃ ┣ Input.tsx
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┣ Loading.tsx
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┗ ResultMessage.tsx
 ┃ ┣ Home
 ┃ ┃ ┣ Content.tsx
 ┃ ┃ ┣ RepositoryListItem.tsx
 ┃ ┃ ┗ UserInfo.tsx
 ┃ ┣ Issue
 ┃ ┃ ┣ Content.tsx
 ┃ ┃ ┣ IssueList.tsx
 ┃ ┃ ┗ IssueListItem.tsx
 ┃ ┗ Repo
 ┃ ┃ ┗ Content.tsx
 ┣ hooks
 ┃ ┗ queries
 ┃ ┃ ┣ useGetIssueQuery.ts
 ┃ ┃ ┗ useGetRepositoryQuery.ts
 ┣ lib
 ┃ ┣ apis
 ┃ ┃ ┣ base.ts
 ┃ ┃ ┗ github.ts
 ┃ ┣ consts
 ┃ ┃ ┣ api.ts
 ┃ ┃ ┣ query.ts
 ┃ ┃ ┣ queryKey.ts
 ┃ ┃ ┗ storage.ts
 ┃ ┣ types
 ┃ ┃ ┣ github.ts
 ┃ ┃ ┗ storage.ts
 ┃ ┗ utils
 ┃ ┃ ┣ storage.ts
 ┃ ┃ ┗ util.ts
 ┣ pages
 ┃ ┣ Home.tsx
 ┃ ┣ Issue.tsx
 ┃ ┗ Repo.tsx
 ┣ styles
 ┃ ┣ animation.ts
 ┃ ┣ colors.ts
 ┃ ┗ GlobalStyle.tsx
 ┣ App.tsx
 ┗ index.tsx
```
