<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { throttle } from "@/utils/throttle"
import CardCircuits from '~/ui/Card/CardCircuits.vue';
import data from "@/assets/data/archives/archives.json"
const activeIndex = ref(0)
const CARDS = data.length
const STEP_X = 150;
const STEP_Y = 30;
const STEP_Z = 40;
const colors = [
  'stroke-(--pz-neon)',
  'stroke-(--pz-yellow)',
  'stroke-(--pz-yellow-glow)',
  'stroke-(--pz-neon-2)',
  'stroke-(--pz-purple)',
]

const cardColors = ref<string[]>([])

function handleWheel(e: WheelEvent) {
  console.log("e : ", e)
  if (Math.sign(e.deltaY) === -1) {
    // wheel up
    activeIndex.value = activeIndex.value === data.length - 1 ? activeIndex.value : activeIndex.value + 1
  } else {
    //wheel down
    activeIndex.value = activeIndex.value === 0 ? 0 : activeIndex.value - 1
  }
}


const handleWheelThrottled = throttle(handleWheel, 250)

function getRandomColor(): string {
  if (!colors.length) return 'stroke-(--pz-neon)'
  const index = Math.floor(Math.random() * colors.length)
  return colors[index] ?? 'stroke-(--pz-neon)'
}

onMounted(() => {
  if (!colors || colors.length === 0) {
    cardColors.value = Array(CARDS).fill('stroke-(--pz-neon)')
  } else {
    // generate a color for each card
    cardColors.value = Array.from({ length: CARDS }, getRandomColor)
  }

  window.addEventListener('wheel', handleWheelThrottled)


})

onBeforeUnmount(() => {
  window.removeEventListener('wheel', handleWheelThrottled)
  handleWheelThrottled.cancel()
})


</script>

<template>
  <section class="h-screen sect-container relative">
    <div class="flex items-center justify-center gap-6 perspective-distant">
      <div class="relative translate-y-[-5vh] translate-x-[-10vw] transform-3d w-[min(42vw,540px)] h-[min(28vw,360px)]">
        <div v-for="(archive, index) in data" :key="index"
          class="absolute trns hover:rotate-[-5deg] group hover:-translate-y-20 hover:-translate-x-10 will-change-transform inset-0 w-full backface-hidden  p-40 lg:p-100"
          :style="`transform: translateX(${(index - activeIndex) * STEP_X}px)
            translateY(${(index - activeIndex) * STEP_Y}px)
            translateZ(${(index - activeIndex) * STEP_Z}px)
            rotateX(-10deg) rotateY(-50deg)
            `">
          <div class="absolute inset-0 z-1">
            <CardCircuits
              :class="['stroke-4 w-full fill-(--pz-bg-2) trns group-hover:fill-(--pz-neon)', cardColors[index], { 'fill-(--pz-yellow-glow)': activeIndex === index }]" />
          </div>
          <div class="absolute -top-10 translate-x-1/2 z-10 flex flex-col gap-2">
            <span class="font-tech text-xl p-2 bg-(--pz-yellow-glow) text-black rounded-xl">{{ archive.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.shadow-layer {
  box-shadow: 0 0 40px var(--pz-neon);
  opacity: calc(1 - var(--depthFactor, 3px));
}
</style>