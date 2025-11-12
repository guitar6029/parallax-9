<script setup lang="ts">
import { computed, ref } from 'vue'
import Card1 from '~/ui/Card/Card-1.vue';
import { phases } from '@/assets/data/phase/data'
const activeIndex = ref(0)
const STEP_X = 150;
const STEP_Y = 15;
const STEP_Z = 10;
</script>

<template>
  <section class="h-screen sect-container relative">


    <div class="flex items-center justify-center gap-6 perspective-[150rem]">
      <div
        class="relative translate-y-[-10vh] translate-x-[-10vw] transform-3d w-[min(42vw,540px)] h-[min(28vw,360px)]">
        <div v-for="(phase, index) in phases" :key="phase.id"
          class="absolute inset-0 w-full backface-hidden  p-40 lg:p-100" :style="`transform: translateX(${(index - activeIndex) * STEP_X}px)
            translateY(${(index - activeIndex) * STEP_Y}px)
            translateZ(${(index - activeIndex) * STEP_Z}px)
            rotateX(-10deg) rotateY(-50deg)
            `">
          <div class="absolute inset-0 z-1">
            <Card1 class="stroke-4 w-full fill-(--pz-bg-2) text-(--pz-neon)" />
          </div>
          <div class="relative z-10 flex flex-col gap-2">
            <span>{{ phase.id }}</span>
            <span>{{ phase.subtitleText }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
