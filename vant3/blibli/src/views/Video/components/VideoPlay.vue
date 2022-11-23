<template>
  <div class="vide-play">
    <video :src="videoData.videoSrc" controls></video>
  </div>
  <div class="video-info">
    <div class="info-top">
      {{ videoData.desc }}
    </div>
    <div class="info-button">
      <div class="author">
        <img :src="videoData.authorIconSrc" alt="" />
        <span>{{ videoData.author }}</span>
      </div>
      <div class="detail">
        <span>{{ videoData.playCount }}观看</span>
        <span>
          <van-icon name="good-job" /> <span>{{ videoData.likeCount }}</span>
        </span>
        <span>
          <van-icon name="star" /> <span>{{ videoData.favCount }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { IVideoItem } from "@/module/type";
import { getVideo } from "@/api/homevideo";
import { getRecommend } from "@/api/recommend";
const router = useRouter(); //路由器
const route = useRoute(); //路由
//数据
let videoData = ref<IVideoItem>({
  id: "",
  imgSrc: "", //封面图
  videoSrc: "", //视频
  desc: "", //视频标题
  author: "", //作者名
  authorIconSrc: "", //作者头像
  playCount: "", //播放数
  likeCount: "", //点赞数
  favCount: "", //收藏数
  commentCount: "", //评论数
  date: "", //发布时间
});
if (route.params.title == "首页") {
  getVideo(<string>route.params.id).then((res) => {
    videoData.value = res.result as IVideoItem;
  });
  // axios
  //   .post("/videosList", { id: route.params.id })
  //   .then((res) => {
  //     console.log("首页。。。。。", res.data.result);
  //     videoData.value = <IVideoItem>res.data.result;
  //   })
  //   .catch((err) => console.log("没找到视频"));
} else {
  getRecommend(<string>route.params.id).then((res) => {
    videoData.value = res.result as IVideoItem;
  });
  // axios
  //   .post("/recommendList", {
  //     id: route.params.id,
  //   })
  //   .then((res) => {
  //     console.log("推荐", res.data.result);
  //     videoData.value = <IVideoItem>res.data.result;
  //   })
  //   .catch(function (error) {});
}
</script>

<style scoped lang="less">
//播放视频
.vide-play {
  margin-top: 45px;
  height: 240px;
  width: 100%;
  video {
    height: 100%;
    width: 100%;
  }
}
.video-info {
  //视频详细介绍
  // height: 112px;
  width: 100%;
  .info-top {
    height: 60px;
    font-size: 15px;
    text-align: left;
    display: flex;
    padding: 10px 5px;
    align-items: flex-end;
  }
  .info-button {
    height: 25px; //52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;

    .author {
      margin-left: 10px;
      display: flex;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
        display: block;
        border-radius: 50%;
      }
    }
    .detail {
      margin-right: 10px;
      display: flex;
      align-items: center;
      span {
        margin: 0px 4px;
        font-size: 10px;
        .van-icon {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
