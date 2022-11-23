<template>
  <!-- 头部 -->
  <AppHeader></AppHeader>
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwipe />
  <!-- 视频组件 -->
  <HomeVideoList />
</template>

<script>
import AppHeader from "@/components/AppHeader"; //头部
import HomeChannel from "./components/home-channel"; //频道栏
import HomeSwipe from "./components/home-swipe"; //轮廓图
import HomeVideoList from "./components/home-video-list"; //视频
export default {
  components: { AppHeader, HomeChannel, HomeSwipe, HomeVideoList },
  setup() {
    return {};
  },
};
</script>
