<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import CMC_EXPERIENCES from '@/assets/data/Parallax9Data.json'
import type { CMC } from '~/types/CMC';
import { throttle } from '#imports';

const STEP_X = 300;
const STEP_Y = 20;
const STEP_Z = 60;

//definePageMeta({ layout: 'main' })
useHead({
    title: 'Catalog — Parallax-9',
    meta: [
        {
            name: 'description',
            content:
                'Explore the Parallax-9 Catalog — a curated collection of Memory Constructs, concepts, and experiential designs crafted to blur the boundary between the digital and the surreal.',
        },
    ],
})


function handleKey(e: KeyboardEvent) {
    if (e.key === 'ArrowLeft') {
        // user wants to go to previous one 
        if (activeIndex.value !== 0) {
            return activeIndex.value = activeIndex.value - 1
        }
    } else if (e.key === 'ArrowRight') {
        if (activeIndex.value < maxIndex.value) {
            return activeIndex.value = activeIndex.value + 1
        }
    } else if (e.key === ' ' || e.key === 'Space') {
        console.log('Spacebar pressed');
        e.preventDefault()
    }
}


const handleKeyThrottled = throttle(handleKey, 150)
const CMCExperiences = ref<CMC[]>(CMC_EXPERIENCES)
const activeIndex = ref(0)

onMounted(() => {
    window.addEventListener("keydown", handleKeyThrottled)
})

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyThrottled)
    handleKeyThrottled.cancel()
})


// returns the object of the active index from CMC_EXPERIENCES
const activeCMC = computed(() => {
    return CMCExperiences.value[activeIndex.value]
})

const maxIndex = computed(() => {
    return CMCExperiences.value.length - 1
})

</script>

<template>
    <section class="sect-container h-screen relative">


        <!-- THE CMC MONITOR -->
        <div
            class="absolute bottom-180 left-180 w-200 h-200 bg-(--pz-bg-2) -skew-x-1 -skew-y-12 flex flex-col items-center justify-center">
            <!-- <span class="font-tech text-4xl tracking-[.5em]">Please LOAD CMC</span> -->
            <div class="flex flex-col gap-2 items-center justify-center">
                <h1>{{ activeCMC?.title }}</h1>
                <span>Intensity {{ activeCMC?.intensity }}</span>
            </div>
        </div>


        <div class="absolute bottom-50 left-120 perspective-[100rem]">

            <div tabindex="0"
                class="relative w-[720px] h-[260px] [transform-style: preserve-3d] [transform-origin: 0%_100%] transform-[rotateX(55deg)_rotateZ(-20deg)]">

                <div v-for="(item, index) in CMCExperiences" :key="item.id">
                    <div :class="['absolute transition-transform duration-300 ease-out top-0 left-0 flex items-center justify-center  w-64 h-40 rounded-2xl border-2 will-change-transform backface-hidden', { 'border-(--pz-neon)': activeIndex === index }]"
                        :style="`transform:
            translateX(${((index - activeIndex) * STEP_X)}px)
            translateY(${-(index - activeIndex) * STEP_Y}px)
            translateZ(${(index - activeIndex) * STEP_Z}px)
            rotateX(32deg) rotateY(6deg)`">

                        <div class="absolute top-1/2 -translate-y-1/2">
                            <span class="text-4xl">{{ item.title }}</span>
                        </div>

                        <!-- index + 1 since 0 based -->
                        <div class="relative -bottom-40  -skew-y-2 -skew-x-2 flex flex-col items-center gap-2"
                            v-if="activeIndex === index">
                            <!-- <span>this one</span> -->
                            <Icon name="material-symbols:arrow-outward" size="3rem" class="-rotate-40" />
                            <span class="text-4xl">Space (Load CMC)</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

</template>
