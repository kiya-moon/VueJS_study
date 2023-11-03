import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

const app = createApp(App)

// HTML 커스텀 요소
app.component('friend-contact', FriendContact);

app.mount('#app');


