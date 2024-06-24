<template>
  <div class="chat-container">
    <h2 class="chat-title">{{ title }}</h2>
    <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['chat-item', message.sender === 'me' || message.sender === 'Lv97管理员 大数据20肖砥城'? 'chat-item-right' : 'chat-item-left']"
    >
      <div class="avatar">
        <div v-if="message.sender === 'me'" class="avatar-svg me-avatar">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#4caf50"/>
            <circle cx="20" cy="14" r="6" fill="white"/>
            <path d="M14 26c0-3.314 4.686-6 6-6s6 2.686 6 6H14z" fill="white"/>
          </svg>
        </div>
        <div v-else class="avatar-svg other-avatar">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#ffeb3b"/>
            <circle cx="20" cy="14" r="6" fill="#fff"/>
            <path d="M14 26c0-3.314 4.686-6 6-6s6 2.686 6 6H14z" fill="#fff"/>
          </svg>
        </div>
        <p class="avatar-name">{{ message.sender === 'me' ? '' : message.sender }}</p>
      </div>
      <div class="chat-bubble">
        <div class="chat-content">
          <h6>{{ message.text }}</h6>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  messages: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width: 400px;
  /*margin: auto;*/
  background-color: #f4f6f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chat-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

.chat-item {
  display: flex;
  align-items: flex-start;
  margin: 5px 0;
}

.chat-item-left {
  flex-direction: row;
}

.chat-item-right {
  flex-direction: row-reverse;
}

.avatar {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.avatar-svg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.me-avatar {
  background-color: #4caf50;
}

.other-avatar {
  background-color: #ffeb3b;
}

.avatar-name {
  font-size: 12px;
  margin-top: 5px;
  color: #333;
}

.chat-bubble {
  max-width: 70%;
  padding: 10px;
  border-radius: 15px;
  position: relative;
  animation: bubble-in 0.3s ease-in-out;
}

.chat-item-left .chat-bubble {
  background-color: #ffeb3b;
}

.chat-item-right .chat-bubble {
  background-color: #4caf50;
  color: white;
}

.chat-content {
  display: flex;
  align-items: center;
}

.chat-content p {
  margin: 0;
}

@keyframes bubble-in {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
