import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue';
import { route } from './'
const

const router = createRouter({
	history: createWebHistory(),
	routes: 
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}