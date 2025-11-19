<script setup lang="ts">
import TheCoreCognition from "~/components/TheCoreCognition.vue";
import { onMounted, ref, computed } from "vue";
const SCENE_SWITCHER_TIME_IN_SECONDS = 10500;
const initialView = ref<"intro" | "theCoreCognition">("theCoreCognition");

// definePageMeta({ layout: 'main' })

const scenes = {
  cryptic: [
    "COGNITION CORE: ONLINE",
    "SIGNAL ACCEPTED",
    "INITIALIZING FRAGMENT PROTOCOL…",
  ],
  sentient: [
    "THE CORE IS AWAKE",
    "IDENTITY SIGNAL: RECEIVED",
    "PREPARING FRAGMENTS…",
  ],
  deepSciFi: [
    "SOMETHING IS WATCHING",
    "YOUR MIND HAS BEEN RECOGNIZED",
    "UNSEALING THE FRAGMENTS…",
  ],
};

onMounted(() => {
  setTimeout(() => {
    initialView.value = "theCoreCognition";
  }, SCENE_SWITCHER_TIME_IN_SECONDS);
});

// COMPUTED
const currentView = computed(() => {
  return initialView.value;
});
</script>

<template>
  <section class="sect-container h-screen">
    <div
      v-if="currentView === 'intro'"
      class="flex flex-col items-center justify-center gap-10 text-4xl font-tech uppercase"
    >
      <span
        v-for="(line, index) in scenes['sentient']"
        :key="index"
        class="fade-in"
      >
        {{ line }}
      </span>
    </div>
    <TheCoreCognition v-if="currentView === 'theCoreCognition'" />
  </section>
</template>

<style scoped>
.fade-in {
  opacity: 0;
  animation: fadeIn 10s forwards ease-out;
}

.fade-in:nth-child(1) {
  animation-delay: 1s;
}
.fade-in:nth-child(2) {
  animation-delay: 3.25s;
}
.fade-in:nth-child(3) {
  animation-delay: 6.5s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>
