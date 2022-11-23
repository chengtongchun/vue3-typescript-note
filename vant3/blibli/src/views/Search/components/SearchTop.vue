<template>
  sdds
  <form action="/" class="search-top">
    <van-search
      class="search"
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  setup() {
    const router = useRouter(); //路由器
    const value = ref("");
    const onSearch = (val: any) => {}; //Toast(val);
    const onCancel = () => {
      // router.push("/")
      router.go(-1);
    }; // Toast("取消");
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};
</script>

<style lang="less" scoped>
.search-top {
  position: fixed;
  top: 0px;
  z-index: 1000;
  height: 55px;
  width: 100%;
  .van-search {
    //.search{
    /deep/.van-search__action {
      color: #fb72a6 !important;
    }
  }
}
</style>
