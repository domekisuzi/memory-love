

<template>
  <el-container class="main-container">
    <el-header>
      <div class="header-content">
<!--        <img src="path/to/your/logo.png" alt="Logo" class="logo">-->
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">Home</el-menu-item>
          <el-menu-item index="2">About</el-menu-item>
          <el-menu-item index="3">Services</el-menu-item>
          <el-menu-item index="4">Contact</el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <div id="fullpage">
      <div class="section">
        <HomeView />
      </div>
      <div class="section">
        <AboutView/>
      </div>

      <div class="section">
        拟合
      </div>
      <div class="section">
        你好
      </div>
    </div>

    <el-footer>
      <div class="footer-content">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </el-footer>
  </el-container>
</template>
<script setup>

import {nextTick, onMounted, ref} from "vue";

import fullpage from 'fullpage.js';
import  Page1 from "@/assets/1_life.md"
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
const activeIndex = ref('home');
const handleSelect = (key, keyPath) => {
  fullpage_api.moveTo(key);
};

const sections = [
  { title: 'Home', content: 'Welcome to our homepage!' },
  { title: 'About', content: 'Learn more about us.' },
  { title: 'Services', content: 'Discover our services.' },
  { title: 'Contact', content: 'Get in touch with us.' }
];
onMounted(()=>{

  nextTick(()=>{
    new fullpage('#fullpage', {
      anchors: ['Home', 'About', 'Services', 'Contact'],
      navigation: true,
      // navigationTooltips: ['Home', 'About', 'Services', 'Contact'],
      showActiveTooltip: true
    });
  })

})
</script>
<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.el-container {
  min-height: 100vh;

  display: flex;
  flex-direction: column;
}
.main-container{
  width: 100%;
  /*flex: 1;*/
  /*flex-direction: column;*/
}
.el-header {
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.header-content {
  display: flex;
  align-items: center;
  width: 100%;
}

.logo {
  height: 50px;
  margin-right: 20px;
}

.el-menu-demo {
  background-color: transparent;
  border: none;
}

.el-menu-demo .el-menu-item {
  color: #fff;
}

#fullpage {
  flex: 1;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
}

.el-footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
