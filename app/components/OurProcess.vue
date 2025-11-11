<script setup lang="ts">
import { computed, ref } from 'vue'
import Card1 from '~/ui/Card/Card-1.vue';
const activeIndex = ref(0)
const STEP_X = 450;
const STEP_Y = 10;
const STEP_Z = 60;
</script>

<template>
  <section class="h-screen sect-container relative">
    <div class="flex items-center justify-center gap-6 perspective-[150rem]">
<!-- transform-[rotateX(-15deg)_rotateZ(-10deg)] -->
      <div
        class="relative w-[min(42vw,540px)]  transform-3d [transform-origin: 0%_100%] ">

        <div class="relative p-40 lg:p-100 gap-2 " :style="`transform:
            translateX(${((1 - activeIndex) * STEP_X)}px)
            translateY(${-(1 - activeIndex) * STEP_Y}px)
            translateZ(${(1 - activeIndex) * STEP_Z}px)
            rotateX(32deg) rotateY(6deg)`">
          <div class="absolute inset-0 z-1">
            <Card-1 class="w-full h-full fill-(--pz-chrome)/10" />
          </div>
        </div>


      </div>


    </div>
  </section>
</template>