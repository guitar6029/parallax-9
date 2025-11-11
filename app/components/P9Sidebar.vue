<script lang="ts" setup>
import { navItems } from "@/assets/data/nav/NavLinks"
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { throttle } from "@/utils/throttle"
import P9Logo from "@/assets/img/brain-logo.png"
import PanelLink from '~/ui/Panels/PanelLink.vue'
import VerticalSquares from '~/ui/accents/VerticalSquares.vue'

const isMenuForSmallerScreenDisplaying = ref(false)
const currentWindowSize = ref(0)
const hasMounted = ref(false)

function updateWindowSize() {
    if (typeof window !== 'undefined') {
        currentWindowSize.value = window.innerWidth
    }
}

const handleResizeThrottled = throttle(updateWindowSize, 150)
const largeScreen = computed(() => {
    return currentWindowSize.value >= 1024
})

//watch the breaking point for the window size
watch(largeScreen, (isLarge) => {
    if (isLarge) {
        isMenuForSmallerScreenDisplaying.value = false
    }
})

function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && isMenuForSmallerScreenDisplaying.value) {
        isMenuForSmallerScreenDisplaying.value = false
    }
}


function handleMenu() {
    isMenuForSmallerScreenDisplaying.value = !isMenuForSmallerScreenDisplaying.value
}


onMounted(() => {

    //hasMounted check
    hasMounted.value = true

    updateWindowSize() //set initial size
    window.addEventListener("resize", handleResizeThrottled)
    //add listener for the escape key
    window.addEventListener("keydown", handleKeydown)

})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResizeThrottled)
    window.removeEventListener('keydown', handleKeydown)
    handleResizeThrottled.cancel() // clear any traillin timer
})

</script>

<template>
    <Icon v-if="!largeScreen && hasMounted" @click="handleMenu" name="material-symbols:menu" size="4rem"
        class="cursor-pointer trns hover:text-(--pz-neon) absolute top-0 right-1 z-100" />
    <Transition enter-active-class="transition-all duration-300 ease-out"
        enter-from-classs="-translate-y-full opacity-0" enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition-all duration-200 ease-in" leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-full opacity-0">

        <div v-if="isMenuForSmallerScreenDisplaying && !largeScreen"
            class="z-100 absolute top-0 w-full h-full bg-(--pz-bg) flex flex-col items-center justify-center gap-2">
            <h1 class="absolute top-5 left-0 cyber text-3xl border-b text-(--pz-neon)">Parallax-9</h1>
            <VerticalSquares />
            <Icon @click="isMenuForSmallerScreenDisplaying = false" name="material-symbols:cancel-presentation"
                size="4rem" class="absolute top-0 right-1 cursor-pointer trns hover:text-(--pz-neon)">X</Icon>
            <nav class="flex flex-col gap-10">
                <div class="cyber text-4xl" v-for="item in navItems" :key="item.label">
                    <NuxtLink @click="isMenuForSmallerScreenDisplaying = false" :to="item.to"
                        class="flex items-center gap-2 trns hover:text-(--pz-neon)">
                        <Icon name="material-symbols:arrow-outward" size="1.5rem" />
                        <span>{{ item.label }}</span>
                    </NuxtLink>
                </div>
            </nav>
        </div>
    </Transition>


    <aside v-if="largeScreen"
        class="trns hover:bg-(--pz-bg-2) top-0 h-screen flex w-80 shrink-0 flex-col justify-around bg-(--pz-bg) text-(--pz-text) relative">


        <!-- top section -->
        <div class="flex flex-col gap-2 items-center justify-center">
            <img :src="P9Logo" alt="Parallax-9 Logo" class="w-full opacity-80">
            <span class="font-tech text-center">Parallax-9</span>
        </div>
        <!-- Middle Section -->
        <nav class="flex flex-col items-center gap-2">
            <div class="cyber text-2xl" v-for="item in navItems" :key="item.label">
                <PanelLink :to-path="item.to" :label="item.label" />
            </div>
        </nav>
        <!-- Bottom section -->
        <div>

        </div>
    </aside>
</template>