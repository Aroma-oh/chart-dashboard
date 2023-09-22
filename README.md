# 👩🏻‍💻 Chart dashboard
#### 프로젝트 소개
* Area, Bar `복합 그래프`를 확인할 수 있는 시계열 차트입니다.
* 날짜, 지역으로 `데이터 필터링`이 가능합니다. (지역은 데이터 클릭, 지역구 버튼 클릭 두가지 방법으로 필터링을 제공합니다.)
* 원티드 프리온보딩 4주차 기업과제로 진행했습니다.
* 기간: 2023.09.10 ~ 2023.09.12

#### 기술 스택
* React, TypeScript, Styled-component, Recharts

#### 배포링크 및 데모영상
* 배포 링크: https://chart-dashboard-mauve.vercel.app/
* 데모 영상
 ![chart](https://github.com/Aroma-oh/chart-dashboard/assets/115550622/151d0aff-6dc2-4b15-bb32-5175869a23f4)

#### 실행 방법
```
$ npm install
$ npm run dev
```
----

## 📑 구현 방법 소개
### 1. 라이브러리 선택하기
* 짧은 기간내 구현을 위해 '레퍼런스가 충분한가', '공식 문서가 읽기 쉬운가'를 기준으로 관련 라이브러리를 탐색했습니다. 
* chart.js / echarts / recharts 등을 탐색했으며, API 문서 이해가 가장 쉬웠던 `recharts`를 선택했습니다.
### 2. 데이터 변환하기 
* 라이브러리에서 요구하는 타입으로 데이터를 변환하하기 위해 `groupDataByDate` 함수를 만들어 사용했습니다.
   https://github.com/Aroma-oh/chart-dashboard/blob/2f3ed160eb0202455b7c74210279fbc4267820f9/src/utils/groupDataByDate.ts#L3-L18
### 3. 그래프 그리기 
* **복합 그래프**: `ResponsiveContainer`, `ComposedChart` 컴포넌트를 이용했습니다. 
* **호버 기능**: 지역구를 정보를 제공하기 위해 CustomTooltip으로 content를 편집하였습니다.
* **필터링 기능**:
  <br/> 필터링된 그래프 하이라이팅 처리를 위해 Bar 등의 하위로 사용 가능한 `Cell` 컴포넌트를 이용했습니다. 선택한 지역(id) 상태와 일치하는 Cell에 하이라이팅을 주었습니다.
  <br/> 또한 주어진 데이터는 분/초 단위의 변화가 있음을 확인하여 일자와 시간을 분리하였습니다. 분/초 단위 시간의 흐름에 따른 값의 변화를 더 잘보여주기 위한 결정이었으며, 분리한 `날짜`는 `필터`로 분리하였습니다. 
### 4. 스타일링
* styled-component의 `reset`, `createGlobalStyle`, `ThemeProvider`을 이용하여 스타일링 코드 작성의 생산성을 높였습니다.

## 🥺 아쉬움으로 남은 사항들
### 라이브러리에 의존하는 코드 
* recharts 라이브러리로 차트를 그리기 위해, 라이브러리가 요구하는 데이터 형식으로 전처리를 하고 지원하는 속성을 사용했습니다. 그 결과 `ChartDisplay` 컴포넌트는 recharts 라이브러리에 높은 의존성을 갖게 되었습니다.
* 외부 라이브러리에 너무 깊게 의존하는 문제를 줄이고자, 데이터 관리를 `DashBoard` 컴포넌트로 분리하였지만, 시계열 차트를 그리는 것이 주요 기능인 이번 프로젝트에서는 여전히 의존성이 recharts에 치우친 문제를 지울 수 없었습니다.
* 이번 프로젝트를 통해 외부 환경에 의존하는 코드를 지양하기 위해서는, 먼저 라이브러리에 대한 깊은 이해를 통해 요구하는 속성을 주입하는 방식으로 의존성을 분리하는 것이 중요함을 배웠습니다.  

