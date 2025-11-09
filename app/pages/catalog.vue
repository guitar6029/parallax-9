<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import CMSItems from '@/assets/data/Parallax9Data.json'
import type { CMC } from '~/types/CMC';


const CMSExperiences = ref<CMC[]>(CMSItems)
const activeCMS = ref<CMC | null>(null)
const activeIndex = ref(0)
const maxIndex = ref(CMSItems.length - 1)



function handleKey(e: KeyboardEvent) {
    console.log("current active index : ", activeIndex.value)
    if (e.key === 'ArrowLeft') {
        console.log('Left arrow pressed');
        // user wants to go to previous one 
        if (activeIndex.value === 0) {
            //do nothing
            console.log("no more, at the first one")
            return
        } else {
            console.log('going back by 1')
            activeIndex.value = activeIndex.value - 1
            // set the active CMS
            activeCMS.value = CMSExperiences.value[activeIndex.value - 1] as CMC

        }
    } else if (e.key === 'ArrowRight') {
        if (activeIndex.value === maxIndex.value) {
            //do nothing
            console.log("no more, next does not exist")
            return
        } else {
            console.log("going forward by 1")
            activeIndex.value = activeIndex.value + 1
            // also scroll down
        }
    } else if (e.key === ' ' || e.key === 'Space') {
        console.log('Spacebar pressed');
    }
}

onMounted(() => {
    console.log("CMS items : ", CMSItems);
    window.addEventListener("keydown", handleKey)
})

onBeforeUnmount(() => {
    window.removeEventListener("keydown", handleKey)
})


// definePageMeta({ layout: 'main' })
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


</script>

<template>
    <section class="sect-container h-screen relative">


        <!-- THE CMS MONITOR -->
        <div class="absolute shadow-neutral-700 shadow-2xl bottom-150 left-120 w-200 h-200 bg-(--pz-bg-2) -skew-x-12 -skew-y-12 flex flex-col items-center justify-center">
                <!-- <span class="font-tech text-4xl tracking-[.5em]">Please LOAD CMS</span> -->
                 <div class="flex flex-col gap-2 items-center justify-center">
                    <h1>{{ activeCMS?.title }}</h1>
                 </div>
        </div>

    
        <div class="absolute bottom-50 left-120 [perspective:100rem]">

            <div
                class="relative gap-2 w-[720px] h-[260px] [transform-style: preserve-3d] [transform-origin: 0%_100%] [transform:rotateX(55deg)_rotateZ(-20deg)]">

                <div v-for="(item, index) in CMSExperiences" :key="item.id">
                    <div :class="['absolute transition-transform duration-400 ease-out top-0 left-0 flex items-center justify-center  w-64 h-40 rounded-2xl border-2', { 'border-(--pz-neon)': activeIndex === item.id - 1 }]"
                        :style="`transform:
            translateX(${((index - activeIndex) * 300)}px)
            translateY(${-(index - 1) * 20}px)
            translateZ(${(index - 1) * 60}px)
            rotateX(32deg) rotateY(6deg)`">

                        <div class="absolute top-1/2 -translate-y-1/2">
                            <span class="text-4xl">{{ item.title }}</span>
                        </div>

                        <!-- index + 1 since 0 based -->
                        <div class="relative -bottom-40  -skew-y-2 -skew-x-2 flex flex-col items-center gap-2"
                            v-if="activeIndex === (item.id - 1)">
                            <!-- <span>this one</span> -->
                            <Icon name="material-symbols:arrow-outward" size="3rem" class="-rotate-40" />
                            <span class="text-4xl">Space (Load CMC)</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <!-- MAYBE FOR LATER -->
        <!-- <div class="absolute -bottom-10 -left-10 [perspective:800px]">

            <div
                class="relative gap-2 w-[720px] h-[260px] [transform-style: preserve-3d] [transform-origin: 0%_100%] [transform:rotateX(55deg)_rotateZ(-20deg)]">
                <div class="text-4xl font-tech">
                    this 
                </div>
                
            </div>
        </div> -->

    </section>

</template>
