<!-- made by domekisuzi
    @2024/6/24
-->
<template>
  <div class="cartoon-card">
    <div class="cartoon-card-image">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.cartoon-card {
  background-color: #f5f5dc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.cartoon-card-image {
  width: 100%;
  height: auto;
}

.cartoon-card-image img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
