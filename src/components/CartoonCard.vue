<!-- made by domekisuzi
    @2024/6/24
-->
<template>
  <div class="cartoon-card">
    <h2 class="cartoon-title">{{ title }}</h2>
    <div class="cartoon-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Cartoon Card Title',
  },
});
</script>

<style scoped>
.cartoon-card {
  width: 300px;
  background: linear-gradient(145deg, #f9f9f9, #e0e0e0);
  border: 5px solid #000;
  border-radius: 20px;
  box-shadow: 10px 10px 0 #000, 15px 15px 0 #ff6347;
  position: relative;
  text-align: center;
  padding: 20px;
  margin: 20px;
}

.cartoon-card::before,
.cartoon-card::after {
  content: '';
  position: absolute;
  border: 5px solid #000;
  border-radius: 50%;
  background-color: #ff6347;
}

.cartoon-card::before {
  width: 30px;
  height: 30px;
  top: -15px;
  left: -15px;
}

.cartoon-card::after {
  width: 50px;
  height: 50px;
  bottom: -25px;
  right: -25px;
}

.cartoon-title {
  color: #000;
  font-size: 1.8em;
  margin-bottom: 10px;
  text-shadow: 2px 2px #ff6347;
}

.cartoon-content {
  color: #333;
  font-size: 1.2em;
}
</style>
