<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mainContainer = ref<HTMLDivElement | null>(null)
const dimensionMainContainer = ref({
    width: 0,
    height: 0
})

onMounted(() => {
    console.log("onMounted")
    console.log("properties of main container")
    const rect = mainContainer.value?.getBoundingClientRect()
    console.log("rect : ", rect)
    if (!rect) return
    console.log("rect.width : ", rect.width)
    console.log("rect.height : ", rect.height)
    dimensionMainContainer.value.width = rect.width
    dimensionMainContainer.value.height = rect.height
})

const dimensionComp = computed(() => {
    return {
        width: dimensionMainContainer.value.width,
        height: dimensionMainContainer.value.height
    }
})

</script>

<template>
    <div ref="mainContainer" class="w-[400px] h-[300px]  relative flex flex-col items-center justify-center z-20">
        <div class="absolute rounded-full -z-1 sq-1 top-0 left-0 w-25 h-25 bg-transparent shadow-amber-500 shadow-2xl"
            :style="{ '--w': `${dimensionComp.width - 10}px`, '--h': `${dimensionComp.height - 10}px` }">

        </div>
        <span>W :{{ dimensionMainContainer.width }}</span>
        <span>H :{{ dimensionMainContainer.height }}</span>


    </div>
</template>


<style scoped>
/* animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
 */
.sq-1 {
    animation: move 5s ease-in 1s infinite forwards;
}

@keyframes move {
    0% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(var(--w), 0);
    }

    50% {
        transform: translate(calc(var(--w)), var(--h));
    }

    75% {
        transform: translate(0, var(--h));
    }

    100% {
        transform: translate(0, 0);
    }
}
</style>