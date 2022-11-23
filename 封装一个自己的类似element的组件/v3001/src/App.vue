<template>
  <nav>
    <router-link to="/home">选项式</router-link> |
    <router-link to="/about">组合式</router-link>
  </nav>
  <router-view/>

</template>
<script setup>
import{provide} from 'vue'
//在祖先组件中提供key：value
//在孙子中用const msg=inject('AppVueMsg')获取
provide('AppVueMsg','我是App.vue')
</script>
