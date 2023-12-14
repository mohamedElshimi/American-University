import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
// import DropZone from '../node_modules/dropzone-vue';

// optionally import default styles
// import 'dropzone-vue/dist/dropzone-vue.common.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
// app.use(DropZone)
app.mount('#app')
