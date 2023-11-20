// 1. npm install --save vue-router@next 최신버전 설치 맟 서버 시작(npm run serve)

import { createApp } from 'vue';
// 2. createApp을 통해 Vue 앱을 생성할 수 있듯이, createRouter를 통해 Vue 라우터를 생성할 수 있다
import {createRouter } from 'vue-router'

import App from './App.vue';

const app = createApp(App)
// 3. router 상수 생성 후 createRouter를 호출하여 해당 상수의 결과값을 저장
// 4. createRouter 함수 안에는 지원하고자 하는 URL 등을 설정할 수 있다
const router = createRouter({
  // 5.라우터 생성을 위해 JavaScript 객체를 입력하는데, 해당 객체에는 두 가지 중요한 옵션을 설정할 수 있음
  // 5-1. history 옵션
  //      이 옵션을 통해 라우터에게 본 앱의 라우팅 히스토리 관리 방법을 알려줄 수 있다
  //      createWebHistory() 함수 호출
  //      이전에는 브라우저에서 JavaScript를 이용하여 사용자가 어느 페이지에 있고 어디서 왔는지,
  //      브라우저의 메모리를 조작하는 것이 항상 가능하지는 않아 라우터가 이 동작을 emulate해야 했고, 
  //      내장 브라우저 히스토리를 사용하지도 않았다
  //      하지만 몇 년 전부터 createWebHistory 함수를 호출하여 라우터에게 사용자에 대한 정보 등을 알려주는 데 아무 문제가 없어 
  //      브라우저 내장 메커니즘을 사용하게 됨        
  history: createWebHistory(),
  // 5-2. routes
  //      모든 라우트이자 경로, 즉 지원하고자 하는 여러 URL을 등록한다
  //      보통 배열이 들어가는데, 대부분의 앱에서 하나 이상의 라우트를 지원하기 때문
  //      routes를 설정할 때는 어떤 URL에 대해 어떤 Vue 컴포넌트가 로드되었는지를 알리는 것을 목적으로 한다
  //      도메인 /teams인 경우에는 Teams 컴포넌트가, /users인 경우에는 Users 컴포넌트가 표시되도록 하는 것
  routes: [{
    // 6. routes 배열에는 JavaScript 객체를 전달한다
    //    모든 객체는 하나의 라우트에 해당하며 라우트에 대한 구성이 있어야 함
    //    모든 라우터에 대해 설정하는 중요한 옵션으로는 경로 path 옵션이 있음
    // 7. path 옵션
    // path는 URL에서 도메인의 뒷부분에 해당하며 라우터가 어떤 컴포넌트를 로드해야 하는 지 알려주는 역할을 한다
  }]
})

app.mount('#app');
