<template>
  <el-container class="main-container">
    <CartoonNavbar />
    <div id="fullpage">
      <div class="section">
        <CartoonCard title="回忆">
          <first_start1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="回忆">
          <first_start2 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="回忆">
          <first_start3 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="回忆">
          <first_start4 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="摆烂">
          <second_depress1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="摆烂">
          <second_depress2 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="日常">
          <third_life1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="日常">
          <third_life2 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="日常">
          <third_life3 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="最艰难的一年里">
          <fourth_different1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="最艰难的一年里">
          <fourth_different2 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="最艰难的一年里">
          <fourth_different3 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="游戏">
          <fifth_crazy1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="游戏">
          <fifth_crazy2 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="结语">
          <sixth_over1 />
        </CartoonCard>
      </div>
      <div class="section">
        <CartoonCard title="结语">
          <sixth_over2 />
        </CartoonCard>
      </div>
    </div>
    <CartoonFooter />
  </el-container>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue';
import fullpage from 'fullpage.js';

import CartoonNavbar from '@/components/CartoonNavbar.vue';
import CartoonCard from '@/components/CartoonCard.vue';
import CartoonFooter from '@/components/CartoonFooter.vue';
import First_start1 from '@/views/first_start1.vue';
import First_start2 from '@/views/first_start2.vue';
import First_start3 from '@/views/first_start3.vue';
import First_start4 from '@/views/first_start4.vue';
import Second_depress1 from '@/views/second_depress1.vue';
import Second_depress2 from '@/views/second_depress2.vue';
import Third_life1 from '@/views/third_life1.vue';
import Third_life2 from '@/views/third_life2.vue';
import Third_life3 from '@/views/third_life3.vue';
import Fourth_different1 from '@/views/fourth_different1.vue';
import Fourth_different2 from '@/views/fourth_different2.vue';
import Fourth_different3 from '@/views/fourth_different3.vue';
import Fifth_crazy1 from '@/views/fifth_crazy1.vue';
import Fifth_crazy2 from '@/views/fifth_crazy2.vue';
import Sixth_over1 from '@/views/sixth_over1.vue';
import Sixth_over2 from '@/views/sixth_over2.vue';

const activeIndex = ref('memory');
const handleSelect = (key, keyPath) => {
  fullpage_api.moveTo(key);
};

onMounted(() => {
  nextTick(() => {
    new fullpage('#fullpage', {
      menu : '#fp-nav',
      anchors: [
        'memory', 'memory', 'memory', 'memory',
        'depression', 'depression',
        'life', 'life', 'life',
        'difficult', 'difficult', 'difficult',
        'crazy', 'crazy',
        'over', 'over'
      ],
      navigation: true,
      showActiveTooltip: true,
      scrollingSpeed: 1000, // Set the speed of the transition between sections
      scrollOverflow: false, // Disable scroll overflow
      scrollBarscrollBar: true,
      autoScrolling: false,
      fitToSectionfitToSection: false,
      fadingEffectfadingEffect: true,
      scrollOverflowMacStylescrollOverflowMacStyle: true
    });
  });
});
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}

.main-container {
  width: 100%;
  display: grid;
}

#fullpage {
  flex: 1;
}

.fullpage-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
