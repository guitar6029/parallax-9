<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import CMC_EXPERIENCES from '@/assets/data/Parallax9Data.json'
import type { CMC } from '~/types/CMC';
import { throttle } from '#imports';

const STEP_X = 450;
const STEP_Y = 10;
const STEP_Z = 60;
const currentWindowSize = ref(0)

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

function updateWindowSize() {
    if (typeof window !== 'undefined') {
        currentWindowSize.value = window.innerWidth
    }
}

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
const handleResizeThrottled = throttle(updateWindowSize, 150)
const CMCExperiences = ref<CMC[]>(CMC_EXPERIENCES)
const activeIndex = ref(0)

onMounted(() => {
    //get window size
    updateWindowSize()

    window.addEventListener("keydown", handleKeyThrottled)
    //window resize 
    window.addEventListener("resize", handleResizeThrottled)
})

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKeyThrottled)
    handleKeyThrottled.cancel()

    window.removeEventListener("resize", handleResizeThrottled)
    handleResizeThrottled.cancel()

})


// returns the object of the active index from CMC_EXPERIENCES
const activeCMC = computed(() => {
    return CMCExperiences.value[activeIndex.value]
})

const maxIndex = computed(() => {
    return CMCExperiences.value.length - 1
})

const getScaleForTheContainer = computed(() => {
    const w = currentWindowSize.value
    if (w <= 786) return 0.55
    else if (w <= 1200) return 0.65
    else if (w <= 1440) return 0.87
    else return 1.0
})


const getSceneOffset = computed(() => {
    if (currentWindowSize.value <= 786)
        return { x: -200, y: 40 }
    else if (currentWindowSize.value <= 1200)
        return { x: -100, y: 30 }
    else if (currentWindowSize.value <= 1440)
        return { x: -50, y: 20 }
    else
        return { x: 0, y: 0 }
})

const isCompactView = computed(() => currentWindowSize.value <= 640)


</script>

<template>
    <section v-if="isCompactView" class="sect-container h-screen relative">
        <div class="flex flex-col items-center justify-center">
            <div class="sticky top-0 w-full bg-(--pz-bg-2)/70 p-4 text-center">
                <h1 class="cyber text-3xl">{{ activeCMC?.title }}</h1>
                <span class="text-sm">Intensity {{ activeCMC?.intensity }}</span>
            </div>

            <div class="flex overflow-x-auto gap-4 snap-x snap-mandatory px-4 py-10">
                <div v-for="(item, index) in CMCExperiences" :key="item.id"
                    class="min-w-[80vw] snap-center border-2 rounded-xl p-8 text-center"
                    :class="{ 'border-(--pz-yellow)': activeIndex === index }" @click="activeIndex = index">
                    <h2 class="text-2xl">{{ item.title }}</h2>
                    <p class="text-sm opacity-70">Tap to Load CMC</p>
                </div>
            </div>
        </div>
    </section>
    <section v-else class="sect-container h-screen relative">
        <!-- absolute bottom-50 left-90 perspective-[150rem] -->
        <div class="absolute perspective-[150rem]" :style="{
            transform: `translate(${getSceneOffset.x}px, ${getSceneOffset.y}px) scale(${getScaleForTheContainer})`,
            transformOrigin: 'bottom left'
        }">
            <!-- CMC MONITOR -->
            <div
                class="absolute bottom-75 left-1/2 translate-x-[-50%] w-420 h-200 bg-(--pz-bg-2) -skew-x-1 -skew-y-12 flex flex-col items-center justify-center z-20 shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                <div class="flex flex-col gap-2 items-center justify-center">
                    <h1 class="cyber text-5xl">{{ activeCMC?.title }}</h1>
                    <span>Intensity {{ activeCMC?.intensity }}</span>
                </div>
            </div>

            <!-- CARDS + PLATFORM RAIL -->
            <div tabindex="0"
                class="relative w-[720px] h-[260px] [transform-style: preserve-3d] [transform-origin: 0%_100%] transform-[rotateX(55deg)_rotateZ(-20deg)]">

                <div class="bg-(--pz-bg-2)/50 h-150 absolute z-1" :style="{
                    width: `${((CMCExperiences.length - 1) * STEP_X) + STEP_X}px`,
                    transform: `translateX(${-activeIndex * STEP_X}px)`
                }">

                </div>
                <!-- CMC CARDS -->
                <div v-for="(item, index) in CMCExperiences" :key="item.id">
                    <div :class="['cmc-card absolute z-10 transition-transform duration-300 ease-out top-0 left-0 flex items-center justify-center border-4 w-100 h-150 rounded-2xl bg-linear-to-r from-(--pz-bg) to-(--pz-bg-2) will-change-transform backface-hidden', { 'border-(--pz-yellow)': activeIndex === index }]"
                        :style="`transform:
            translateX(${((index - activeIndex) * STEP_X)}px)
            translateY(${-(index - activeIndex) * STEP_Y}px)
            translateZ(${(index - activeIndex) * STEP_Z}px)
            rotateX(32deg) rotateY(6deg)`">
                        <div class="absolute w-5 h-5 bg-(--pz-yellow) top-2 left-2">
                        </div>

                        <div class="absolute top-1/2 -translate-y-1/2">
                            <span class="text-4xl">{{ item.title }}</span>
                        </div>

                        <!-- index + 1 since 0 based -->
                        <!-- -skey-y-2 -skew-x-2 -->
                        <div class="relative -bottom-40 flex flex-col items-center gap-2" v-if="activeIndex === index">
                            <!-- <span>this one</span> -->
                            <!-- <Icon name="material-symbols:arrow-outward" size="3rem" class="-rotate-40" /> -->
                            <span class="text-4xl">Load CMC</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>

</template>

<style scoped></style>
