import App from './App.vue'

import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {createRouter, createWebHistory} from 'vue-router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

import VueAnalytics from 'vue3-analytics'

import './assets/app.scss'
import Home from './pages/HomePage.vue'
import Storage from './pages/StoragePage.vue'
import Item from './pages/ItemPage.vue'
import Submission from './pages/SubmissionPage.vue'
import Community from './pages/CommunityPage.vue'
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
    { path: '/policy', name: 'Datenschutzerklärung', component: Policy
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const app = createApp(App)
app.mixin({
    methods: {
        getDataFromType: function(type) {
            switch (type.toLowerCase()) {
                case 'plugin': return {
                    name: 'Plugin',
                    icon: 'bi:plugin'
                }
                case 'lib': return {
                    name: 'Bibliothek',
                    icon: 'material-symbols:menu-book'
                }
            }
        },
        getDataFromCategory: function(category) {
            switch (category.toLowerCase()) {
                case 'admintool': return {
                    name: 'Admin-Tool',
                    icon: 'ic:baseline-remove-red-eye'
                }
                case 'devtool': return {
                    name: 'Developer-Tool',
                    icon: 'material-symbols:developer-mode'
                }
                case 'chat': return {
                    name: 'Chat',
                    icon: 'material-symbols:chat'
                }
                case 'economy': return {
                    name: 'Economy',
                    icon: 'mdi:money-100'
                }
                case 'game': return {
                    name: 'Game',
                    icon: 'ion:game-controller'
                }
                case 'protection': return {
                    name: 'Schutz',
                    icon: 'material-symbols:admin-panel-settings-rounded'
                }
                case 'roleplay': return {
                    name: 'Rollenspiel',
                    icon: 'mdi:castle'
                }
                case 'worldmanagement': return {
                    name: 'Welt-Management',
                    icon: 'mdi:world'
                }
                case 'misc': return {
                    name: 'Sonstiges',
                    icon: 'akar-icons:dot-grid-fill'
                }
            }
        },
        getDataFromPlatform: function(platform) {
            switch (platform.toLowerCase()) {
                case 'spigot': return {
                    name: 'Spigot',
                    icon: 'material-symbols:water-drop'
                }
                case 'paper': return {
                    name: 'Paper',
                    icon: 'mdi:paper'
                }
                case 'sponge': return {
                    name: 'Sponge',
                    icon: 'fluent-emoji-high-contrast:sponge'
                }
            }
        },
    }
})
app.use(BootstrapVue3)
app.use(router)
app.use(VueAnalytics, {
    id: import.meta.env.VITE_ANALYTICS_ID,
    router
})

app.config.globalProperties.$discordJoinUrl = 'https://discord.gg/azG4wxrQWy'
app.config.globalProperties.$donationUrl = 'https://www.buymeacoffee.com/deinplugin'
app.config.globalProperties.$twitterUrl = 'https://twitter.com/deinpluginnet'
app.config.globalProperties.$roadmapUrl = 'https://github.com/orgs/DeinPlugin/projects/1'

app.mount('#app')