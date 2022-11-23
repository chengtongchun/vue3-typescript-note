import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app=createApp(App)
app.provide('cjy',"sfsdfsdf");//最顶层提供，谁都可以用inject('cjy')取
//全局指令
app.directive('big',(el,binding)=>{
     el.style.fontSize=binding.value+'px';
});
app.use(store).use(router).mount('#app')
