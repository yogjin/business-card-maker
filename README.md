[![Netlify Status](https://api.netlify.com/api/v1/badges/4303f114-0622-47c0-9614-a38e75f7002a/deploy-status)](https://app.netlify.com/sites/business-carrrd/deploys)
# business-card-maker

간단한 개발자 명함을 만들 수 있습니다.

https://business-carrrd.netlify.app/

## 이용 방법

### 1. Google 계정으로 로그인
![스크린샷 2022-07-22 오전 10 00 28](https://user-images.githubusercontent.com/33623078/180339458-492e1f15-8f73-4ec9-9ca9-502f632599e8.jpg)

### 2. 카드 작성 방법
<img width="1447" alt="image" src="https://user-images.githubusercontent.com/33623078/180339838-f7ba008b-f0c8-4a89-8023-3c3ce14b9354.png">

1. input에 정보를 입력

2. 프로필 사진 추가

3. 카드 추가하기

### 3. 카드 여러개 생성 가능
<img width="1447" alt="image" src="https://user-images.githubusercontent.com/33623078/180341030-9434c5b5-174b-4248-abf7-7156006b31dc.png">

## 사용 기술

React, TypeScript (Rendering, Logic)

Styled-components (style)

firebase: OAuth(google), Realtime database

react-router-dom

Cloudinary (Store Card Profile)

netlify (deployment web server)

## 구조
```
📦src
 ┣ 📂common
 ┃ ┗ 📜interfaces.ts
 ┣ 📂component
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂Card
 ┃ ┃ ┗ 📜CardComponent.tsx
 ┃ ┣ 📂Card_add_form
 ┃ ┃ ┗ 📜Card_add_form.tsx
 ┃ ┣ 📂Card_edit_form
 ┃ ┃ ┗ 📜Card_edit_form.tsx
 ┃ ┣ 📂Editor
 ┃ ┃ ┗ 📜Editor.tsx
 ┃ ┣ 📂Footer
 ┃ ┃ ┗ 📜Footer.tsx
 ┃ ┣ 📂Header
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┣ 📂ImageFileInput
 ┃ ┃ ┗ 📜ImageFileInput.tsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.tsx
 ┃ ┣ 📂Maker
 ┃ ┃ ┗ 📜Maker.tsx
 ┃ ┗ 📂Preview
 ┃ ┃ ┗ 📜Preview.tsx
 ┣ 📂images
 ┃ ┣ 📜default_logo.png
 ┃ ┗ 📜logo.png
 ┣ 📂service
 ┃ ┣ 📜firebase.ts
 ┃ ┣ 📜firebase_auth_service.ts
 ┃ ┣ 📜firebase_realtime_db.ts
 ┃ ┗ 📜image_uploader.ts
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜logo.svg
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
