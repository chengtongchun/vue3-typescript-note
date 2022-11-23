<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="sw in list">
      <img :src="sw.imgSrc" :alt="sw.link" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { ISwiper } from "@/module/type"; //轮播图接口
import { getSwipeList } from "@/api/swipe";
export default {
  setup() {
    const list = ref<ISwiper[]>([]);

    getSwipeList().then((res) => {
      list.value = res.result as ISwiper[];
    });
    // list
    // axios({
    //   url: "/swiperList",
    //   method: "get",
    // }).then((res) => {
    //   console.log(res.data.result);
    //   list.value = res.data.result;
    // });
    return { list };
  },
};
</script>

<style lang="less" scoped>
.my-swipe {
  width: 100%;
  margin-top: 100px;
  img {
    width: 100%;
  }
}
</style>
