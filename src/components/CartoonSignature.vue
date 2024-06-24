<template>
  <div class="cartoon-signature">
    <ul class="signature-list">
      <li v-for="(item, index) in signatures" :key="index" class="signature-item">
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ item.time }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  signatures: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.cartoon-signature {
  display: flex;
  justify-content: center;
}

.signature-list {
  max-width: 600px;
  width: 100%;
  list-style: none;
  padding: 0;
}

.signature-item {
  background-color: #ffd59a;
  border-radius: 10px;
  padding: 12px;
  margin-bottom: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.time {
  color: #ffa94d;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}

.content {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
}
</style>
