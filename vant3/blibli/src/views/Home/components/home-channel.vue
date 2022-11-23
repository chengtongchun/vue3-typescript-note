<template>
  <van-tabs v-model:active="active" sticky>
    <van-tab v-for="cha in channelList" :title="cha.text">
      <!-- 内容 {{ index }} -->
    </van-tab>
  </van-tabs>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { INvaItem } from "@/module/type"; //视频选项栏接口
import { getNavList } from "@/api/navList"; //视频种类导航栏数据
export default {
  setup() {
    const active = ref(0);
    let channelList = ref<INvaItem[]>([]);
    getNavList().then((res) => {
      channelList.value = res.result as INvaItem[];
    });
    // axios({
    //   url: "/navList",
    //   method: "get",
    // }).then((res) => {
    //   console.log(res.data);
    //   channelList.value = res.data.result;
    // });
    // axios.get('/navList').then(response=>{
    //     console.log(response.data)
    // },err=>{
    //     console.log('请求失败了',err.message)
    // })
    return {
      active,
      channelList,
    };
  },
};
</script>

<style lang="less" scoped>
.van-tabs {
  position: fixed;
  top: 44px;
  left: 0;
  z-index: 1000;
}
</style>
