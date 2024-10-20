<template>
  <router-view />  <!-- 路由中的布局组件会自动插入这里 -->
</template>

<script setup>

import {onMounted} from "vue";
import {getData, insertData} from "@/tool/api.js";

onMounted(()=>{

  startCollect()

})
const startCollect =  () => {
  getData().then( res =>{
    console.log(res.data)
    insertData(res.data)
  } )
}
</script>

<style>
/* 全局样式 */
</style>
