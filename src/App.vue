<template>
  <el-container class="main-container">
    <CartoonNavbar />

    <div id="fullpage">
      <div class="section">

        <CartoonImage>
          <img src="@/assets/img.png">
        </CartoonImage>
<!--        <first_start1 />-->
      </div>
      <div class="section">
        <AboutView />
      </div>
      <div class="section">
        <CartoonCard title="拟合">
          <p>这里是拟合内容。</p>
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="你好">
          <p>这里是你好内容。</p>
        </CartoonCard>
      </div>
    </div>

    <CartoonFooter />
  </el-container>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import fullpage from 'fullpage.js';

import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import First_start1 from '@/views/first_start1.vue';
import CartoonNavbar from '@/components/CartoonNavbar.vue';
import CartoonCard from '@/components/CartoonCard.vue';
import CartoonFooter from '@/components/CartoonFooter.vue';
import CartoonNoTitleCard from "@/components/CartoonNoTitleCard.vue";
import CartoonImage from "@/components/CartoonImage.vue";


const activeIndex = ref('home');
const handleSelect = (key, keyPath) => {
  fullpage_api.moveTo(key);
};

onMounted(() => {
  nextTick(() => {
    new fullpage('#fullpage', {
      anchors: ['Home', 'About', 'Services', 'Contact'],
      navigation: true,
      showActiveTooltip: true,
    });
  });
});
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

.main-container {
  width: 100%;
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
  padding-top: 60px; /* Adjust padding to ensure content is not hidden behind the header */
}
</style>
