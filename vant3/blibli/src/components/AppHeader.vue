<template>
  <!-- <header class="app-header">
    <i class="iconfont Navbar_logo app-header-left" @click="goHome"></i>
    <div class="app-header-right">
      <a class="search" href="/search" data-v-41e9b56e="">
        <i class="iconfont icon-search search"></i
      ></a>
      <a class="face" href="/login" data-v-41e9b56e="">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAdABoDABEAAREBAhEB/8QAGQABAAMBAQAAAAAAAAAAAAAABQMEBgEI/8QAKRAAAgEDAwIEBwAAAAAAAAAAAQIDAAQRBRIhMUETMmGhBiRCUXGBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMAAAERAhEAPwD2Ld3Mdsm5+SeijqaA86rNniNAPXNBasr5J2CMNj9h2NBcoM5rk7iWZx1UhBntzigNMchWX5psHz7R0/HH8oJ7KWTxGUyB9gVlYD70GshbfCjn6lBoAtdtGLvjhZDuB9c5oA5794pWVvCZk4yM0COnW8ss5bcrNLjyjgAd/eg1KKFQKOgGBQckRJFKuoZT2NAPN8M6dLMZCZ13HJAfj3FApZ2sNpCsUK4AGMnkn90E1B//2Q=="
          alt=""
          data-v-41e9b56e=""
        />
      </a>
      <div>下载APP</div>
    </div>
  </header> -->
  <van-nav-bar left-arrow fixed class="top-header">
    <template #left>
      <i class="iconfont Navbar_logo app-header-left" @click="goHome"></i>
    </template>
    <template #right>
      <!-- 未登录 -->
      <div class="app-header-right" v-if="userData == false">
        <a class="search" href="/search" data-v-41e9b56e="">
          <i class="iconfont icon-search search left-icon"></i
        ></a>
        <a class="face" href="/login" data-v-41e9b56e="">
          <img src="@/assets/images/login.png" alt="" />
          <!-- <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wAARCAAdABoDABEAAREBAhEB/8QAGQABAAMBAQAAAAAAAAAAAAAABQMEBgEI/8QAKRAAAgEDAwIEBwAAAAAAAAAAAQIDAAQRBRIhMUETMmGhBiRCUXGBsf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMAAAERAhEAPwD2Ld3Mdsm5+SeijqaA86rNniNAPXNBasr5J2CMNj9h2NBcoM5rk7iWZx1UhBntzigNMchWX5psHz7R0/HH8oJ7KWTxGUyB9gVlYD70GshbfCjn6lBoAtdtGLvjhZDuB9c5oA5794pWVvCZk4yM0COnW8ss5bcrNLjyjgAd/eg1KKFQKOgGBQckRJFKuoZT2NAPN8M6dLMZCZ13HJAfj3FApZ2sNpCsUK4AGMnkn90E1B//2Q==" alt="" data-v-41e9b56e="" /> -->
        </a>
        <van-button color="#ff5873" class="xiazai">下载app</van-button>
      </div>
      <!-- 已登录 -->
      <div class="app-header-right" v-if="userData != false">
        <a class="search" href="/search" data-v-41e9b56e="">
          <i class="iconfont icon-search search left-icon"></i
        ></a>
        <a class="face" href="javascript:;" data-v-41e9b56e="">
          <img src="@/assets/images/user.jpg" alt="" />
        </a>
        <van-button color="#ff5873" class="xiazai" @click="logout"
          >退出登录</van-button
        >
      </div>
    </template>
  </van-nav-bar>
</template>

<script lang="ts">
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let userData: any = ref(false); //获取登录信息
    if (JSON.parse(<any>localStorage.getItem("user")) != null)
      userData.value = JSON.parse(<any>localStorage.getItem("user"));
    function goHome(): void {
      router.push("/"); //去首页
    }
    function logout(): void {
      //退出登录
      userData.value = false;
      localStorage.removeItem("msg");
    }
    return { goHome, logout, userData };
  },
};
</script>

<style lang="less" scoped>
//组件 导航
.top-header {
  background-color: white;
  z-index: 1000;
  color: rgb(247, 100, 124); // rgb(180, 178, 178);
  .app-header-left {
    font-size: 30px;
  }
  .app-header-right {
    display: flex;
    align-items: center;
    a {
      color: rgb(180, 178, 178);
      margin: 0 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 22px;
        height: 22px;
      }
    }
    i {
      font-size: 22px;
    }
    .xiazai {
      color: white;
      width: 60px;
      height: 100%;
      font-size: 10px;
      padding: 1vh 0vw;
      margin-left: 10px;
      border-radius: 5px;
    }
  }
}
// // 头部
// .app-header {
//   width: 100%;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   z-index: 1000;
//   background-color: white;
//   padding: 1vh 3vw;
//   display: flex;
//   justify-content: space-between;
//   .app-header-left {
//     font-size: 30px;
//     color: pink;
//     border-radius: 10px;
//     font-size: 28px;
//     display: flex;
//     align-items: center;
//   }
//   .app-header-right {
//     display: flex;
//     justify-content: space-around;
//     align-items: center;
//     .search {
//       font-size: 28px;
//       padding: 0 5px;
//       color: rgb(180, 178, 178);
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       i {
//         font-size: 28px;
//       }
//     }
//     .face {
//       display: flex;
//       align-items: center;
//       margin: 0 5px;
//       i {
//         font-size: 28px;
//       }
//     }

//     div {
//       margin: 0 5px;
//       background: pink;
//       font-size: 13px;
//       padding: 1vh 3vw;
//       color: white;
//     }
//   }
// }
</style>
