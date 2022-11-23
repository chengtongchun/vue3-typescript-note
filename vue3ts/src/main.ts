import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
// import ElementUI from 'element-ui';
// import 'element-ui/theme-chalk/index.css'
createApp(App)
  .provide("ying", "荧：不错过一个宝箱")
  .directive('red',(el,binding)=>{//全局不用加v
    // console.log(el,binding)//el是dom对象，binding是传过来的值
    el.style.color=binding.value
  })
  .use(store)
  .use(router)
  .use(ElementPlus)
  .mount("#app");
//.provide('ying','荧：不错过一个宝箱')是依赖注入，在main里是全局，哪里都可以，不拘谨与祖宗和孙子啥的
//.directive('color',{})
