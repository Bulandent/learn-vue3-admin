import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import ViteComponents, { AntDesignVueResolver } from 'vite-plugin-components'

function pathResolve(dir: string) {
	return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [
			// /@/xxxx => src/xxxx
			{
				find: /\/@\//,
				replacement: pathResolve('src') + '/',
			},
			// /#/xxxx => types/xxxx
			{
				find: /\/#\//,
				replacement: pathResolve('types') + '/',
			},
		],
	},
	plugins: [
		Vue(),
		ViteComponents({
			customComponentResolvers: [AntDesignVueResolver()],
		}),
	],
})
