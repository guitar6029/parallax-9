<script setup lang="ts">
import VerticalWaveAccent from '~/ui/accents/VerticalWaveAccent.vue';
import VerticalRuler from "~/ui/accents/VerticalRuler.vue";
import VerticalSquares from '~/ui/accents/VerticalSquares.vue';
</script>

<template>
    <div class="relative w-full h-screen overflow-hidden bg-(--pz-bg-2) ">
        <div class="absolute bottom-10 rounded-full right-10 w-500 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-30 rounded-full right-20 w-500 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-50 rounded-full right-30 w-500 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-0 rounded-full left-0 w-200 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-0 rounded-full left-220 w-200 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-0 rounded-full left-220 w-100 h-600 border-2 z-1 opacity-20"></div>
        <div class="absolute bottom-0 rounded-full left-440 w-200 h-600 border-2 z-1 opacity-20"></div>


        <div class="absolute bottom-0 left-0 w-50 h-50 ">
            <span class="cyber text-xl opacity-20">X1</span>
        </div>


        <VerticalRuler />
        <VerticalWaveAccent />
        <VerticalSquares />



        <!-- shape 1 -->
        <div class="absolute bottom-0 right-15 w-2 h-2 bg-(--pz-chrome) z-4 moving"
            style="--distance: 50vh; --dur: 4s; --delay: 2s;"></div>

        <!-- shape 2 -->
        <div class="absolute bottom-10 right-15 w-2 h-2 bg-(--pz-chrome) z-4 moving"
            style="--distance: 70vh; --dur: 5.5s; --delay: 4s;"></div>

        <!-- shape 3 -->
        <div class="absolute bottom-20 right-15 w-2 h-2 bg-(--pz-chrome) z-4 moving"
            style="--distance: 90vh; --dur: 6.5s; --delay: 6s;"></div>

        <!-- shape 4     -->
        <div class="absolute bottom-30 right-15 w-2 h-2 bg-(--pz-crome) z-4 moving"
            style="--distance: 90vh; --dur: 6.5s; --delay: 8s;"></div>

        <!-- content -->
        <div class="relative z-20 overflow-y-auto overflow-x-hidden max-h-dvh">
            <slot />
        </div>
    </div>
</template>