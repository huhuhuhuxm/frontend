import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import "normalize.css/normalize.css" //初始化css
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 创建应用
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

// 挂载app
app.mount('#app')
