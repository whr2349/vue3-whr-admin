/*
 * @Author: whr2349
 * @Date: 2021-03-04 16:02:19
 * @LastEditors: whr2349
 * @LastEditTime: 2021-03-08 14:45:01
 * @Description: file content
 * @FilePath: \webadmin\src\main.js
 */
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// import Ripple from 'vue-ripple-directive' //自定义水波纹
import Ripple from "vue3-whr-ripple-directive";
import "./mock/mock"

Ripple.color = 'rgba(0, 0, 0, 0.1)';

const app = createApp(App)


installElementPlus(app)
app.directive('ripple', Ripple);

app.use(store).use(router).mount('#app')
