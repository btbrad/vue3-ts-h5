import { createApp } from 'vue'
import App from './App.vue'
// 引入全局样式
import '@/styles/index.scss'

import { Button } from 'vant'

const app = createApp(App)
app.use(Button)
app.mount('#app')
