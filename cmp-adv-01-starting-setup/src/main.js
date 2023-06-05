import { createApp } from 'vue';

import App from './App.vue';
// import TheHeader from './components/TheHeader.vue';
import BaseBadge from './components/BaseBadge.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';

const app = createApp(App);
/**
 * 전역 컴포넌트로 등록되게 된다.
 *
 * 전역 등록시 애플리케이션 로드할 때 vue 컴포넌트 전부를 로드해야한다.
 */
// app.component('the-header', TheHeader);
app.component('base-badge', BaseBadge);
// app.component('badge-list', BadgeList);
// app.component('user-info', UserInfo);

app.mount('#app');
