import { createApp } from 'vue'
import App from './App.vue'

// 引入移动端适配
import 'amfe-flexible/index.js'

let app = createApp(App);

app.mount('#app')
