<script setup lang="ts">

const max = 1000

withDefaults(defineProps<{
    numberOfItems?: number

}>(), {
    numberOfItems: 20,
})

function getRandomDistance(index: number) {
    return Math.floor(Math.random() * max)
}

function getRandomTimeDelay(index: number) {
    return 2;
}

</script>


<template>
    <div class="absolute w-50 h-50 top-40 left-40 flex flex-col gap-1">
        <div v-for="i in numberOfItems" class="sq-moving w-2 h-2 bg-(--pz-chrome)/20" :style="{
            '--sqDistanceA': `${getRandomDistance(i)}px`,
            '--sqDistanceB': `${getRandomDistance(i)}px`,
            '--sqDistanceC': `${getRandomDistance(i)}px`,
            '--sqDistanceD': `${getRandomDistance(i)}px`,
            '--randTimeDelay': `${getRandomTimeDelay(i)}s`,
        }"></div>
    </div>
</template>


<style scoped>
.sq-moving {
    animation: movingPattern 20s infinite ease-in-out alternate;
    animation-delay: var(--randTimeDelay, 0s);
}

@keyframes movingPattern {
    0% {
        transform: translate(0,0)
    }
    25% {
        transform: translate(var(--sqDistanceA, 100px), 15px)
    }
    50% {
    transform: translate(calc(-1 * var(--sqDistanceA, 100px)), -45px)
    }
    75%{
        transform: translate(var(--sqDistanceA, 100px), -15px)
    }
    100%{
        transform: translate(0, 0)
    }
}

@keyframes moving {
    from {
        transform: translateX(0);
        background-color: var(--pz-chrome);
    }

    to {
        transform: translateX(var(--sqDistance, 100px));
        background-color: var(--pz-neon);
    }
}
</style>