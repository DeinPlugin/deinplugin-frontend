import App from './App.vue'

import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {createRouter, createWebHistory} from 'vue-router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import './assets/app.scss'
import Home from './pages/Home.vue'
import Storage from './pages/Storage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/storage', name: 'Storage', component: Storage },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App)
app.use(BootstrapVue3)
app.use(router)
app.mount('#app')