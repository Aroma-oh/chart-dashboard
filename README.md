# 👩🏻‍💻 Chart dashboard
#### 프로젝트 소개
* Area, Bar 복합 그래프를 확인할 수 있는 시계열 차트입니다.
* 날짜, 지역으로 데이터 필터링이 가능합니다.
* 원티드 프리온보딩 4주차 개인과제로 진행했습니다.
* 기간: 2023.09.10 ~ 2023.09.12

#### 배포링크 및 데모영상
* 배포 링크: https://chart-dashboard-mauve.vercel.app/
* 데모 영상
  ![chart](https://github.com/Aroma-oh/chart-dashboard/assets/115550622/7811b148-8bd1-4f22-9789-5de0903cecaa)

#### 실행 방법
```
$ npm install
$ npm start
```

#### 기술 스택
`React`, `TypeScript`, `Styled-components`, `Recharts`

## 📑 구현 방법 소개
### 1. 라이브러리 선택하기
* 짧은 기간내 구현을 위해 '레퍼런스가 충분한가', '공식 문서가 읽기 쉬운가'를 기준으로 관련 라이브러리를 탐색했습니다. 
* chart.js / echarts / rechart 등을 탐색했으며, API 문서 이해가 가장 쉬웠던 `rechart`를 선택했습니다.
### 2. 데이터 변환하기 
* 라이브러리에서 요구하는 타입으로 데이터를 변환하하기 위해 `groupDataByDate` 함수를 만들어 사용했습니다.
   https://github.com/Aroma-oh/chart-dashboard/blob/2f3ed160eb0202455b7c74210279fbc4267820f9/src/utils/groupDataByDate.ts#L3-L18
### 3. 그래프 그리기 
* **복합 그래프**: `ResponsiveContainer`, `ComposedChart` 컴포넌트를 이용했습니다. 
* **호버 기능**: 지역구를 정보를 제공하기 위해 CustomTooltip으로 content를 편집하였습니다.
* **필터링 기능**: 필터링된 그래프 하이라이팅 처리를 위해 Bar 등의 하위로 사용 가능한 `Cell` 컴포넌트를 이용했습니다. 선택한 지역(id) 상태와 일치하는 Cell에 하이라이팅을 주었습니다.
### 4. 스타일링
* styled-component의 `reset`, `createGlobalStyle`, `ThemeProvider`을 이용하여 스타일링 코드 작성의 생산성을 높였습니다.
