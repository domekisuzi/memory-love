<!-- made by domekisuzi
    @2024/6/24
-->
<template>
  <button class="cartoon-button">
    <slot></slot>
  </button>
</template>

<style scoped>
.cartoon-button {
  background-color: #ff6347;
  border: 3px solid #000;
  border-radius: 10px;
  box-shadow: 5px 5px 0 #000;
  color: #fff;
  font-size: 1.2em;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cartoon-button:hover {
  background-color: #ff4500;
  box-shadow: 3px 3px 0 #000;
}

.cartoon-button:active {
  box-shadow: 0 0 0 #000;
  transform: translate(3px, 3px);
}
</style>

