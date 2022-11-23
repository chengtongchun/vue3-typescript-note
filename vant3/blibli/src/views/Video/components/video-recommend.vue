<template>
  <van-grid :border="false" :column-num="2">
    <van-grid-item v-for="v in list" :key="v.id">
      <!-- <a :href="/video?"`${v.id}`";首页" class="video-card"> -->
      <a :href="'/video' + '/' + v.id + '/' + '推荐'" class="video-card">
        <img :src="v.imgSrc" alt="" class="van-image" />
        <!-- <van-image :src="v.imgSrc" /> -->
        <div class="video-message">
          <span class="paly"
            ><i class="iconfont icon-video"></i>{{ v.playCount }}</span
          >
          <span class="comment"
            ><i class="iconfont icon_shipin_danmushu"></i
            >{{ v.commentCount }}</span
          >
        </div>
        <div class="introduce">
          {{ v.desc }}
        </div>
      </a>
    </van-grid-item>
  </van-grid>
</template>
<script lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import { IVideoItem } from "@/module/type";
import { getRecommendList } from "@/api/recommend";
export default {
  setup() {
    const list = ref<IVideoItem[]>([]);
    getRecommendList().then((res) => {
      list.value = res.result as IVideoItem[];
    });
    // axios({
    //   method: "get",
    //   url: "/recommendList",
    // }).then(({ data }) => {
    //   list.value = data.result;
    // });
    function shuaxin() {
      window.location.reload();
    }
    return { list, shuaxin };
  },
};
</script>
<style lang="less" scoped>
.van-grid-item {
  // padding: 10px;
  margin-bottom: -20px;
}
.video-card {
  //身体
  // height: 170px;
  position: relative;
  margin-bottom: 5px;
  .van-image {
    //图片
    display: block;
    width: 100%;
    // border-radius: 50%;
    height: 80px;
  }
  //播放数
  .video-message {
    height: 20px;
    width: 100%;
    padding: 3px 2px;
    color: white;
    background: rgba(27, 27, 27, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 60px;
    left: 0px;
    .paly,
    .comment {
      font-size: 10px;
      display: flex;
      align-items: center;
      i {
        // width: 10px;
        // height: 10px;
        font-size: 8px;
        margin-right: 2px;
      }
    }
  }
  .introduce {
    font-size: 12px; //3.2vw;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: left;
  }
}
// .video-card {
//   position: relative;
//   // background:red;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: flex-start;
//   height: 140px;
//   width: 100%;
//   margin-bottom: 0px;
//   margin-top: 0px;
//   // height:100px;
//   .van-grid-item {
//     width: 180px;
//     background-color: red;
//   }
//   .van-image {
//     width: 100%;
//     height: 100px;
//     img {
//       width: 100%;
//       height: 100%;
//     }
//   }
//   .video-message {
//     //视频下面的播放次数和评论次数
//     height: 20px;
//     width: 100%;
//     padding: 3px 2px;
//     color: white;
//     background: rgba(27, 27, 27, 0.4);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     position: absolute;
//     bottom: 40px;
//     left: 0px;
//     z-index: 2;
//     .paly,
//     .comment {
//       font-size: 12px;
//       display: flex;
//       align-items: center;
//     }
//   }
//   .introduce {
//     font-size: 10px; //3.2vw;
//     color: #212121;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//     text-align: left;
//   }
// }
</style>
