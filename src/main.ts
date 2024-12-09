import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
import "normalize.css/normalize.css" //初始化css
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';


// 创建应用
const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.use(ElementPlus, {
  locale: zhCn,
})

// 挂载app
app.mount('#app')
