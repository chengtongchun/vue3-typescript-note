<template>
  <div class="body">
    <describe></describe>
    <login></login>
  </div>
</template>

<script lang="ts">
import login from './components/login.vue'
import describe from './components/describe.vue'
import {useRouter} from 'vue-router'
import { reactive, ref, toRefs } from "vue";
export default {
  components:{login,describe},
  setup() {
    const router=useRouter();//路由
   
  },
};
</script>

<style lang="less" scoped>
.body {
  width: 100%;
  height: 95vh;
  background-color: #f4f4f4;
 
 
}
</style>
