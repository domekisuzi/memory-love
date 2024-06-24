<!-- made by domekisuzi
    @2024/6/24
-->
<template>
  <el-header class="cartoon-navbar">
    <div class="header-content">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="2">About</el-menu-item>
        <el-menu-item index="3">Services</el-menu-item>
        <el-menu-item index="4">Contact</el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref('home');
const handleSelect = (key, keyPath) => {
  console.log(`Selected: ${key}`);
};
</script>

<style scoped>
.cartoon-navbar {
  background-color: #ffeb3b;
  border-bottom: 5px solid #000;
  padding: 10px;
  z-index: 999;
}

.header-content {
  display: flex;
  justify-content: center;
}

.el-menu-demo {
  background-color: transparent;
  border: none;
}

.el-menu-demo .el-menu-item {
  color: #000;
  font-weight: bold;
  font-size: 1.2em;
  text-shadow: 2px 2px #ff6347;
}

.el-menu-demo .el-menu-item:hover {
  background-color: #ff6347;
  color: #fff;
}
</style>

