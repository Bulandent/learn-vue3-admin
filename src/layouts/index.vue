<template>
	<a-layout>
		<hello-world />
		<a-card>hhhh</a-card>
	</a-layout>
</template>

<script lang="ts">
import { defineComponent, ref, h, computed } from 'vue'
import { message } from 'ant-design-vue'
// import Logo from './logo/index.vue'
// import { TabsView } from './tabs'
// import AsideMenu from './menu/menu.vue'
// import PageHeader from './header/index.vue'
// import PageFooter from './footer'

export default defineComponent({
	name: 'Layout',
	setup() {
		const collapsed = ref<boolean>(false)

		const testMsg = () => {
			message.success(h('span', '啥子'), 2)
		}

		const asiderWidth = computed(() => (collapsed.value ? '80px' : '256px'))

		return {
			collapsed,
			testMsg,
			asiderWidth,
		}
	},
})
</script>

<style lang="scss" scoped>
.layout {
	display: flex;
	height: 100vh;
	overflow: hidden;

	.ant-layout {
		overflow: hidden;
	}

	.layout-content {
		flex: none;
	}
}
</style>
