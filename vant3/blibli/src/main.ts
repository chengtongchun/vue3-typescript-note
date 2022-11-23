import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";
// @相当于src
import "@/assets/styles/reset.less";
import "@/assets/styles/iconfont.less";
import "@/assets/font/iconfont.css";
// 需要用到vant组件里面的tab标签页，在入口处引入(其他的同理)
// import { Tab, Tabs, Swipe, SwipeItem, Search, Field, CellGroup, Col, Row } from 'vant';
import {
  Button,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Grid,
  GridItem,
  Image as VanImage,
  Search,
  Field,
  CellGroup,
  Icon,
  Card,
  NavBar,
} from "vant";
import "@/mock/index";
const app = createApp(App);
app
  .use(Button)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Grid)
  .use(GridItem)
  .use(VanImage)
  .use(Search)
  .use(Card)
  .use(NavBar)
  .use(Icon)
  .use(Field)
  .use(CellGroup)
  .use(store)
  .use(router)
  .mount("#app");
