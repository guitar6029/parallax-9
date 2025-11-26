<script setup lang="ts">
import { ref } from "vue";

let androidNoise = ref<HTMLAudioElement | null>(null);
onMounted(() => {
  import("@google/model-viewer");
  // play the intro sound
  androidNoise.value = new Audio("/sfx/android-load-1.mp3");
  if (!androidNoise.value) return;
  androidNoise.value.play();
});

onBeforeUnmount(() => {
  if (!androidNoise.value) return;
  androidNoise.value.pause();
  androidNoise.value.currentTime = 0;
});
</script>

<template>
  <div class="sect-container h-screen w-full relative">
    <div class="flex flex-col gap-2  items-center justify-center w-full h-full">
      <span class="cyber text-6xl z-20">The Core</span>
      <ClientOnly>
        <model-viewer
        src="/models/the_core_cognition.glb"
        camera-controls
        autoplay
        animation-name="Action"
        shadow-intensity="1"
        class="w-full h-full bg-transparent absolute top-20 right-100"
        />
      </ClientOnly>
    </div>
  </div>
</template>
