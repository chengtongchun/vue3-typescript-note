<template>
  <van-cell-group inset class="login">
    <van-field
      v-model="userId"
      error
      required
      label="账号"
      placeholder="请输入用户名"
    />
    <van-field v-model="pwd" required label="密码" placeholder="请输入手机号" />
  </van-cell-group>
  <div class="buttons">
    <van-button color="#E98fa5" plain @click="register">注册</van-button>
    <van-button color="#E98fa5" @click="sumbit">登录</van-button>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { reactive, ref, toRefs } from "vue";

export default {
  setup() {
    const router = useRouter(); //路由

    let form = reactive({
      userId: "",
      pwd: "",
    });
    let userList: { userId: string; pwd: string }[] = reactive([]);
    function sumbit() {
      console.log(localStorage.getItem("users"));
      if (localStorage.getItem("users") == null) {
        //判断登录数据存不存在
        return alert(" 没有该账号");
      } else {
        userList = JSON.parse(<string>localStorage.getItem("users"));
        let flag = userList.filter((u) => u.userId == form.userId);
        if (flag) {
          flag = userList.filter(
            (u) => u.userId == form.userId && u.pwd == form.pwd
          );
          if (flag) {
            localStorage.setItem("user", JSON.stringify(form));
            router.push("/");
          } else {
            return alert("密码有误");
          }
        } else {
          return alert("没有该账号");
        }
      }
    }
    function register() {
      router.push("/register");
    }
    return { ...toRefs(form), sumbit, register };
  },
};
</script>

<style lang="less" scoped>
.login {
  //登录
  width: 100%;
  margin: 0px;
  margin-top: 22px;
}
.buttons {
  margin-top: 40px;
  display: flex;
  justify-content: space-evenly;
  .van-button {
    width: 130px;
    height: 33px;
  }
}
</style>
