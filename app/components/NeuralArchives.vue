<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { throttle } from "@/utils/throttle";
import NeuralArchiveCard from "~/ui/Card/NueralAchiveCard.vue";
import data from "@/assets/data/archives/archives.json";
import {
  STEP_X,
  STEP_Y,
  STEP_Z,
  colors,
  translateX,
  translateY,
} from "@/utils/NeuralAchiveUtils";
const activeIndex = ref(0);
const CARDS = data.length;
const cardColors = ref<string[]>([]);

function handleWheel(e: WheelEvent) {
  if (Math.sign(e.deltaY) === -1) {
    // wheel up
    activeIndex.value =
      activeIndex.value === data.length - 1
        ? activeIndex.value
        : activeIndex.value + 1;
  } else {
    //wheel down
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
  }
}

const handleWheelThrottled = throttle(handleWheel, 250);

function getRandomColor(): string {
  if (!colors.length) return "stroke-(--pz-neon)";
  const index = Math.floor(Math.random() * colors.length);
  return colors[index] ?? "stroke-(--pz-neon)";
}

onMounted(() => {
  if (!colors || colors.length === 0) {
    cardColors.value = Array(CARDS).fill("stroke-(--pz-neon)");
  } else {
    // generate a color for each card
    cardColors.value = Array.from({ length: CARDS }, getRandomColor);
  }

  window.addEventListener("wheel", handleWheelThrottled);
});

onBeforeUnmount(() => {
  window.removeEventListener("wheel", handleWheelThrottled);
  handleWheelThrottled.cancel();
});
</script>

<template>
  <section class="h-screen sect-container relative">
    <div class="flex items-center justify-center gap-6 perspective-distant">
      <div
        :class="[
          `relative translate-y-[${translateY}] translate-x-[${translateX}] transform-3d w-[min(42vw,540px)] h-[min(28vw,360px)] `,
        ]"
      >
        <NeuralArchiveCard
          v-for="(archive, index) in data"
          :key="index"
          :index="index"
          :active-index="activeIndex"
          :title="archive.title"
          :STEP_X="STEP_X"
          :STEP_Y="STEP_Y"
          :STEP_Z="STEP_Z"
          :card-color="cardColors[index]"
        />
      </div>
    </div>
  </section>
</template>
