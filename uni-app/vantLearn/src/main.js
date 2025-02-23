import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import "amfe-flexible"
import router from './router/index.js'
import './style/index.css'
createApp(App).use(Vant).use(router).mount('#app')
