<template>
  <el-header class="cartoon-navbar">
    <div class="header-content">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="memory">回忆</el-menu-item>
        <el-menu-item index="depression">摆烂</el-menu-item>
        <el-menu-item index="life">日常</el-menu-item>
        <el-menu-item index="difficult">最艰难的一年里</el-menu-item>
        <el-menu-item index="crazy">游戏</el-menu-item>
        <el-menu-item index="over">结语</el-menu-item>
      </el-menu>
    </div>
  </el-header>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref('memory');
const handleSelect = (key, keyPath) => {
  fullpage_api.moveTo(key);
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
