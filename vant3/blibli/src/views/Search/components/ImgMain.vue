<template>
  <div class="main">
    <div class="notFound">
        <img src="@/assets/images/notFound.png" alt="">
    <p>没有你要找的内容</p>
    </div>
  </div>
</template>

<script>
  import {ref} from "vue"
export default {
  setup() {
    const value = ref("");
    const onSearch = (val) => Toast(val);
    const onCancel = () => Toast("取消");
    return {
      value,
      onSearch,
      onCancel,
    };
  },
};
</script>

<style lang="less" scoped>
.main{
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;align-items: center;
    background-color:#f4f4f4;
        .notFound{
            // position: absolute;
            // top:25%;
            // left:25%;
            p{
                font-size: 14px;
            }
        }
}
</style>
