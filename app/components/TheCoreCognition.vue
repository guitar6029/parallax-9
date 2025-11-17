<script setup lang="ts">
import TheCore from "@/assets/img/TheCore.png";
</script>

<template>
  <div class="sect-container h-screen">
    <h1 class="cyber text-4xl">The Core Cognition</h1>
    <div class="max-w-200 breathe">
      <img :src="TheCore" alt="the core entity" />
    </div>
  </div>
</template>

<style scoped>
.breathe {
  animation: breatheA 10s ease-in infinite;
}

@keyframes breatheA {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.3;
  }
  100% {
    scale: 1;
  }
}
</style>
