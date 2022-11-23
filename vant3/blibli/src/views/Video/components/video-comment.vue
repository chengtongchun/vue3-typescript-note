<template>
  <div class="comment" v-for="c in list" :key="c.id">
    <div class="left">
      <img :src="c.avatar" alt="" />
    </div>
    <div class="right">
      <div class="gray">{{ c.username }}</div>
      <div class="gray">{{ c.date }}</div>
      <div class="padding-15">
        <b>{{ c.content }}</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { ref } from "vue";
import { IComment } from "@/module/type";
import { getCommentList } from "@/api/comment";
export default {
  setup() {
    const list = ref<IComment[]>([]);
    getCommentList().then((res) => {
      console.log(res, res.result, res.result.items);

      list.value = res.result.items as IComment[];
    });
    console.log(list);
    // axios({
    //   method: "get",
    //   url: "/commentsList",
    // }).then(({ data }) => {
    //   console.log("评论数据", data.result);
    //   console.log(data.result);
    //   list.value = data.result.items;
    // });

    return { list };
  },
};
</script>

<style lang="less" scoped>
.grgy {
  color: gainsboro;
}
.padding-15 {
  padding: 15px 0px;
}
.comment {
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  .left {
    width: 60px;
    display: flex;
    justify-content: center;
    img {
      display: block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .right {
    flex: 1;
    font-size: 12px;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    div {
      margin-bottom: 5px;
      text-align: left;
    }
  }
  // .van-card__header{
  //     .van-card__thumb{
  //     width:62px;
  //     background:red;
  //     .van-image{
  //         width:40px;
  //     }
  //     img{
  //         display: block;width:20px;
  //     }
  // }
  // }
}
// .van-card__thumb{
//     background-color: red;
//     width:200px;
// }
</style>
