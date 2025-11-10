<script setup lang="ts">
import { onMounted, ref } from 'vue';

const max = 1000
const ready = ref(false)


withDefaults(defineProps<{
    numberOfItems: number

}>(), {
    numberOfItems: 20,
});

onMounted(() => {
    ready.value = true
})


function getRandomDistance(index: number = 1) {
    return Math.floor(Math.random() * max)
}

function getRandomTimeDelay(index: number = 1) {
    const min = 1
    const max = 10
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomDimension(index: number = 1) {
    const min = 5
    const max = 20
    return Math.floor(Math.random() * (max - min + 1)) + min
}


</script>


<template>
    <div v-if="ready" class="absolute w-50 h-50 top-40 left-50 flex flex-col gap-5">
        <div v-for="i in numberOfItems" class="sq-moving bg-(--pz-neon)/20" :style="{
            '--sqDistanceA': `${getRandomDistance(i)}px`,
            '--sqDistanceB': `${getRandomDistance(i)}px`,
            '--sqDistanceC': `${getRandomDistance(i)}px`,
            '--randTimeDelay': `${getRandomTimeDelay(i)}s`,
            '--randWidth': `${getRandomDimension(i)}px`,
            '--randHeight': `${getRandomDimension(i)}px`,
        }"></div>
    </div>
</template>


<style>
.sq-moving {
    width: var(--randWidth);
    height: var(--randHeight);
    animation: movingPattern 20s infinite ease-in-out alternate;
    animation-delay: var(--randTimeDelay, 0s);
}

@keyframes movingPattern {
    0% {
        transform: translate(0, 0)
    }

    25% {
        transform: translate(var(--sqDistanceA, 100px), 15px)
    }

    50% {
        transform: translate(calc(-1 * var(--sqDistanceB, 100px)), -45px)
    }

    75% {
        transform: translate(var(--sqDistanceC, 100px), -15px)
    }

    100% {
        transform: translate(0, 0)
    }
}
</style>