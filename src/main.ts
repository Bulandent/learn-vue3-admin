import { createApp } from 'vue'
import App from './App.vue'
import { router, setupRouter } from './routers'
// import { setupAntd } from '/@/plugins/antd'

const app = createApp(App)
// setupAntd(app)
setupRouter(app)

router.isReady().then(() => app.mount('#app'))
