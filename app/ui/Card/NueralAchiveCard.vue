<script setup lang="ts">
import CardCircuits from "~/ui/Card/CardCircuits.vue";
defineProps<{
  index: number;
  activeIndex: number;
  title: string;
  STEP_X: number;
  STEP_Y: number;
  STEP_Z: number;
  cardColor: string | undefined;
}>();

defineEmits<{
  (e: "cardClick"): void;
}>();
</script>

<template>
  <div
    :key="index"
    @click="$emit('cardClick')"
    class="absolute trns hover:rotate-[-5deg] group hover:-translate-y-20 hover:-translate-x-10 will-change-transform inset-0 w-full backface-hidden"
    :style="`transform: translateX(${(index - activeIndex) * STEP_X}px)
            translateY(${(index - activeIndex) * STEP_Y}px)
            translateZ(${(index - activeIndex) * STEP_Z}px)
            rotateX(-10deg) rotateY(-50deg)
            `"
  >
    <div class="absolute h-fit inset-0 z-1">
      <CardCircuits
        :class="[
          'stroke-4 w-full fill-(--pz-bg-2) trns group-hover:fill-(--pz-neon)',
          cardColor,
          { 'fill-(--pz-yellow-glow)': activeIndex === index },
        ]"
      />
    </div>
    <div class="absolute -top-10 translate-x-1/2 z-10 flex flex-col gap-2">
      <span
        :class="[
          'font-tech p-2 bg-(--pz-yellow-glow) text-black rounded-xl',
          { 'text-4xl': activeIndex === index },
        ]"
        >{{ title }}</span
      >
    </div>
  </div>
</template>
