import { createApp } from 'vue'
import { createPinia } from 'pinia'
import urql from '@urql/vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(urql, {
    url: 'http://38.242.229.113:8055/graphql',
});

app.mount('#app')
