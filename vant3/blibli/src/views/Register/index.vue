<template>
  <div class="body">
    <describe></describe>
    <register></register>
  </div>
</template>

<script lang="ts">
import register from "./components/register.vue";
import describe from "./components/describe.vue";
import { useRouter } from "vue-router";
import { reactive, ref, toRefs } from "vue";
export default {
  components: { register, describe },
  setup() {
    const router = useRouter(); //路由
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
