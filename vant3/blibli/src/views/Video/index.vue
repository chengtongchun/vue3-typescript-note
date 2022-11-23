<template>
  <AppHeader></AppHeader>
  <videoPlay ></videoPlay>
  <videoButton></videoButton>
</template>

<script lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import videoPlay from "./components/VideoPlay.vue";
import videoButton from "./components/VideoButton.vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { ref } from "vue";
export default {
  components: { AppHeader, videoPlay, videoButton },
  setup() {
/*    const router = useRouter(); //路由器
    const route = useRoute(); //路由
    console.log(router, route, route.params.id);
    //视频列表接口
    interface IVideoItem {
      id: string | number;
      imgSrc: string; //封面图
      videoSrc: string; //视频
      desc: string; //视频标题
      author: string; //作者名
      authorIconSrc: string; //作者头像
      playCount: string; //播放数
      likeCount: string; //点赞数
      favCount: string; //收藏数
      commentCount: string; //评论数
      date: string; //发布时间
    }
    let videoData = ref<IVideoItem>({
        id:"",
        imgSrc:"",//封面图
      videoSrc: "",//视频
      desc:"",//视频标题
      author: "",//作者名
      authorIconSrc:"",//作者头像
      playCount: "",//播放数
      likeCount:"",//点赞数
      favCount: "",//收藏数
      commentCount:"",//评论数
      date:"",//发布时间
    });
    axios
      .post("/recommendList", {
        id: route.params.id,
      })
      .then((res) => {
        console.log("推荐",res.data.result)
        videoData.value = <IVideoItem>res.data.result;
      })
      .catch(function (error) {
      });
      if(!videoData.value.id){
        axios
          .post("/videosList", { id: route.params.id })
          .then((res) => {
            console.log("推荐",res.data.result)
            videoData.value = <IVideoItem>res.data.result;
          })
          .catch((err) => console.log("没找到视频"));
      }
    return {videoData};*/
  },
};
</script>

<style lang="scss" scoped></style>
