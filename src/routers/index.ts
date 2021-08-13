import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'

// const modules = import.meta.glob('./modules/*.ts')
// console.log(modules);

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Layout',
		//redirect: '/dashboard',
		component: () => import('/@/layouts/index.vue'),
		meta: {
			title: '首页',
		},
		// children: [...common]
	},
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

export function setupRouter(app: App<Element>) {
	app.use(router)
}
