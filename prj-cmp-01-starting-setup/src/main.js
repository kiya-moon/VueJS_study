import { createApp } from 'vue';

import App from './App.vue';
// 3-3. BaseCard 컴포넌트 추가
import BaseCard from './components/UI/BaseCard.vue';
// 5-4. BaseButton 컴포넌트 추가
import BaseButton from './components/UI/BaseButton.vue';
// 8-3. BaseDialog 컴포넌트 추가
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App)

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);

app.mount('#app');
