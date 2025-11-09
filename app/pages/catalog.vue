<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';

const items = [
    {
        id: 1,
        name: "CMS-1"
    },
    {
        id: 2,
        name: "CMS-2"
    },
    {
        id: 3,
        name: "CMS-3"
    },
    {
        id: 4,
        name: "CMS-4"
    },
    {
        id: 5,
        name: "CMS-5"
    },
    {
        id: 6,
        name: "CMS-6"
    },
    {
        id: 7,
        name: "CMS-7"
    },
    {
        id: 8,
        name: "CMS-8"
    },
    {
        id: 9,
        name: "CMS-9"
    },
    {
        id: 10,
        name: "CMS-10"
    },
    {
        id: 11,
        name: "CMS-11"
    },
]


const lengthOfFirtst10 = items.length * 270

const activeIndex = ref(0)
const maxIndex = ref(items.length - 1)

const offSet = 0


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
            //also scroll up
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


        <div class="absolute bottom-50 left-120 [perspective:800px]">

            <div
                class="relative gap-2 w-[720px] h-[260px] [transform-style: preserve-3d] [transform-origin: 0%_100%] [transform:rotateX(55deg)_rotateZ(-20deg)]">

                <div v-for="(item, index) in items" :key="item.id">
                    <div :class="['absolute transition-transform duration-400 ease-out top-0 left-0 flex items-center justify-center  w-64 h-40 rounded-2xl border-2', { 'border-(--pz-neon)': activeIndex === item.id - 1 }]"
                        :style="`transform:
            translateX(${((index - activeIndex) * 300)}px)
            translateY(${-(index - 1) * 20}px)
            translateZ(${(index - 1) * 60}px)
            rotateX(32deg) rotateY(6deg)`">

                        <div class="absolute top-1/2 -translate-y-1/2">
                            <span class="text-4xl">{{ item.name }}</span>
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
