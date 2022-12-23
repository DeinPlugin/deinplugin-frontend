import App from './App.vue'

import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {createRouter, createWebHistory} from 'vue-router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import VueGtag from "vue-gtag";

import './assets/app.scss'
import Home from './pages/HomePage.vue'
import Storage from './pages/StoragePage.vue'
import Item from './pages/ItemPage.vue'
import Submission from './pages/SubmissionPage.vue'
import Community from './pages/CommunityPage.vue'
import Moderation from './pages/ModerationPage.vue'
import Imprint from './pages/ImprintPage.vue'
import Policy from './pages/PrivacyPolicyPage.vue'
import NotFound from './pages/NotFoundPage.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/storage', name: 'Storage', component: Storage },
    { path: '/storage/:id', name: 'Item', component: Item},
    { path: '/submission', name: 'Einreichen', component: Submission },
    { path: '/community', name: 'Community', component: Community },
    { path: '/imprint', name: 'Impressum', component: Imprint },
    { path: '/moderation', name: 'Moderation', component: Moderation },
    { path: '/policy', name: 'Datenschutzerklärung', component: Policy },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App)

app.use(BootstrapVue3)
app.use(router)
app.use(VueGtag, {
    config: { id: import.meta.env.VITE_ANALYTICS_ID }
})

app.config.globalProperties.$discordJoinUrl = 'https://discord.gg/azG4wxrQWy'
app.config.globalProperties.$donationUrl = 'https://www.buymeacoffee.com/deinplugin'
app.config.globalProperties.$twitterUrl = 'https://twitter.com/deinpluginnet'
app.config.globalProperties.$roadmapUrl = 'https://github.com/orgs/DeinPlugin/projects/1'

app.mount('#app')