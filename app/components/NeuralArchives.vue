<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { throttle } from "@/utils/throttle";
import NeuralArchiveCard from "~/ui/Card/NueralAchiveCard.vue";
import data from "@/assets/data/archives/archives.json";
import { getRandomColor } from "@/utils/Colors";
import {
  STEP_X,
  STEP_Y,
  STEP_Z,
  colors,
  translateX,
  translateY,
} from "@/utils/NeuralAchiveUtils";

const isModalArchiveShowing = ref(false);
const activeIndex = ref(0);
const archives = Array.isArray(data) ? data : [];
const CARDS = archives.length;

// start with safe default colors (SSR + first render)
const cardColors = ref<string[]>(Array(CARDS).fill("stroke-(--pz-neon)"));
const isReady = ref(false);

type Archive = (typeof archives)[number];

const selectedArchive = ref<Archive | null>(null);

function handleNeuralCardSelection(index: number) {
  selectedArchive.value = archives[index] ?? null;
}

function handleWheel(e: WheelEvent) {
  if (Math.sign(e.deltaY) === -1) {
    activeIndex.value =
      activeIndex.value === CARDS - 1
        ? activeIndex.value
        : activeIndex.value + 1;
  } else {
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1;
  }
}

const handleWheelThrottled = throttle(handleWheel, 250);

onMounted(() => {
  // only runs on client
  if (colors && colors.length > 0) {
    // randomize colors once client is here
    cardColors.value = Array.from({ length: CARDS }, () =>
      getRandomColor(colors)
    );
  }

  window.addEventListener("wheel", handleWheelThrottled);
  isReady.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener("wheel", handleWheelThrottled);
  handleWheelThrottled.cancel();
});
</script>

<template>
  <section class="h-screen sect-container relative">
    <div class="flex items-center justify-center gap-6 perspective-distant">
      <div v-if="!isReady" class="text-sm text-(--pz-chrome)/70">
        Initializing neural archives…
      </div>

      <div
        v-else
        :class="[
          `relative translate-y-[${translateY}] translate-x-[${translateX}] transform-3d w-[min(42vw,540px)] h-[min(28vw,360px)] `,
        ]"
      >
        <NeuralArchiveCard
          v-for="(archive, index) in archives"
          :key="index"
          :index="index"
          :active-index="activeIndex"
          :title="archive.title"
          :STEP_X="STEP_X"
          :STEP_Y="STEP_Y"
          :STEP_Z="STEP_Z"
          :card-color="cardColors[index] ?? 'stroke-(--pz-neon)'"
          @card-click="handleNeuralCardSelection(index)"
        />
      </div>
    </div>
  </section>
</template>
