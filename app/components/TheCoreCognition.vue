<script setup lang="ts">
import { onMounted, computed } from "vue";
import Panel2 from "~/ui/Panels/Panel-2.vue";
import Card1 from "~/ui/Card/Card-1.vue";
import { throttle } from "@/utils/throttle";

const CORE_COGNITION_NODES = [
  {
    title: "WAKE SEQUENCE",
    description: "Core signature verified. Internal sensors online.",
  },
  {
    title: "DATA INTAKE",
    description: "Environmental feeds acquired. Vector alignment nominal.",
  },
  {
    title: "SYNTHESIS",
    description: "Cognitive mesh resolving. Pattern resonance detected.",
  },
  {
    title: "ACTION PROTOCOL",
    description: "Decision lattice locked. System prepared for execution.",
    action: "Start The Core Cognition",
  },
];

type TheCoreCongintionscene = "intro" | "info-stage";

const CARDS_LENGTH = 4;
const currentIndex = ref(0);
const currentScene = ref<TheCoreCongintionscene>("intro");

function handleChangeCard(e: WheelEvent) {
  if (Math.sign(e.deltaY) === -1) {
    currentIndex.value =
      currentIndex.value === CARDS_LENGTH - 1
        ? currentIndex.value
        : currentIndex.value + 1;
  } else {
    currentIndex.value = currentIndex.value === 0 ? 0 : currentIndex.value - 1;
  }
}

const handleChangeCardThrottle = throttle(handleChangeCard, 150);
let androidNoise = ref<HTMLAudioElement | null>(null);

onMounted(() => {
  // play the intro sound
  androidNoise.value = new Audio("/sfx/android-load-1.mp3");
  if (!androidNoise.value) return;
  //androidNoise.play()
  window.addEventListener("wheel", handleChangeCardThrottle);
});

onBeforeUnmount(() => {
  if (!androidNoise.value) return;
  androidNoise.value.pause();
  androidNoise.value.currentTime = 0;

  window.removeEventListener("wheel", handleChangeCardThrottle);
  handleChangeCardThrottle.cancel;
});

const getContext = computed(() => {
  return CORE_COGNITION_NODES[currentIndex.value];
});
</script>

<template>
  <div class="sect-container h-screen relative">
    <!-- <div class="absolute w-10 h-4 bg-(--pz-neon)/50 top-20  card-anim-1">

    </div> -->
    <div class="absolute top-0 translate-y-1/2 z-10">
      <h1 class="cyber text-[5rem]">The Core Cognition</h1>
      <Panel2 class="w-full absolute inset-0 stroke-4 text-[(--pz-neon)]" />
    </div>
    <div class="relative p-100">
      <Card1 class="w-full absolute z-10 inset-0 stroke-4" />
      <div class="relative z-11 flex flex-col gap-2">
        <span class="cyber text-4xl">{{ getContext?.title }}</span>
        <span class="font-tech text-4xl">{{ getContext?.description }}</span>
        <button
          class="font-tech border-2 trns hover:bg-(--pz-neon) hover:text-black rounded-2 cursor-pointer text-4xl"
          v-if="getContext?.action"
        >
          {{ getContext.action }}
        </button>
      </div>
      <div class="absolute bottom-10 left-10 w-5 h-5 bg-(--pz-neon)"></div>
    </div>
    <div class="flex flex-row items-center gap-2 justify-center">
      <div
        v-for="(_, index) in CARDS_LENGTH"
        :key="index"
        class="w-40 h-2 flex flex-col gap-2"
        :class="currentIndex === index ? 'bg-(--pz-neon)' : 'bg-(--pz-yellow)'"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.breathe {
  animation: breatheA 10s ease-in infinite;
}

.card-anim-1 {
  animation: grow 5s ease-in-out forwards;
}

@keyframes grow {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes breatheA {
  0% {
    scale: 1;
  }
  50% {
    scale: 1.2;
  }
  100% {
    scale: 1;
  }
}
</style>
