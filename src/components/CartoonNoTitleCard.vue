<!-- made by domekisuzi
    @2024/6/24
-->
<template>
  <div class="cartoon-card">
    <div class="cartoon-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.cartoon-card {
  background-color: #f5f5dc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.cartoon-card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; /* Set the height as per your design */
  font-size: 18px;
  color: #2c3e50;
}
</style>

