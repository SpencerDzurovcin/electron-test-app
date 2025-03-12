import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SeedInventory from './views/SeedInventory.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/seedInventory', name: 'SeedInventory', component: SeedInventory }
]

const router = createRouter({
    history: createWebHashHistory(), // Using hash mode for electron apps
    routes
})

export default router