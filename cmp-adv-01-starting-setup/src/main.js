import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import BaseCard from './components/BaseCard';

const app = createApp(App);

// 아래처럼 component() 메서드를 사용하여 컴포넌트를 등록하면,
// 해당 컴포넌트는 Vue 앱 어는 곳(템플릿)에서나 사용할 수 있는 전역(global) 컴포넌트가 된다
// 한 가지 잠재적인 단점은, 앱이 커질수록 코드도 커지고 컴포넌트도 많아지게 되는데,
// 이 모든 컴포넌트를 전역적으로 등록하면 애플리케이션이 처음 로드될 때 Vue가 컴포넌트 전부를 로드하게 된다
// 예를 들어 TheHedaer, UserInfo 컴포넌트는 App.vue에서 한 번만 사용되는 컴포넌트를 어디서든 사용할 수 있도록 전역적으로 등록하는 것은 불필요함
// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);
app.component('base-card', BaseCard);

app.mount('#app');
