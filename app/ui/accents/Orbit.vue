<script setup lang="ts">


import { ref, computed, onMounted } from 'vue'

const mainElement = ref<HTMLDivElement | null>(null)
const smallCircleRef = ref<HTMLDivElement | null>(null)

const dimension = ref({
    width: 0, height: 0,
    borderWidth: 1,
    gap: 4,
})

const props = withDefaults(defineProps<{
    mainContainer: {
        positionX: string,
        positionY: string
    }
    orbiter: {
        width: number,
        height: number,
        borderWidth?: number
    },
    orbitType?: 'inside' | 'outside'

}>(), {
    mainContainer:
        () => ({
            positionX: 'top-20',
            positionY: 'left-0'
        }),
    orbiter: () => ({
        width: 25,
        height: 25,
        borderWidth: 1
    }),
    orbitType: 'inside'
})

// const orbiter = { width: orbiterObj.width, height: 50, borderWidth: 1 }

// read size once (you already have this)
onMounted(() => {
    const el = mainElement.value?.getBoundingClientRect()
    if (!el) return
    dimension.value.width = el.width
    dimension.value.height = el.height
})

const orbiterRadius = computed(() => Math.min(props.orbiter.width, props.orbiter.height) / 2)
const cx = computed(() => dimension.value.width / 2)
const cy = computed(() => dimension.value.height / 2)
const baseRadius = computed(() => Math.min(dimension.value.width, dimension.value.height) / 2)


const pathRadius = computed(() => {
    if (props.orbitType === 'outside') {
        // further from the center
        return baseRadius.value + (orbiterRadius.value + dimension.value.borderWidth / 2 + dimension.value.gap)
    }
    // inside path
    return baseRadius.value - (dimension.value.borderWidth + orbiterRadius.value + dimension.value.gap)
})


// starting angle: top (270°). Use 0, π/2, π, 3π/2 as you prefer.
const baseAngle = computed(() => (3 * Math.PI) / 2)

// helper: fraction ∈ [0,1] → angle → (tx, ty)
function pointAt(fraction: number) {
    const θ = baseAngle.value + fraction * 2 * Math.PI
    const xCenter = cx.value + pathRadius.value * Math.cos(θ)
    const yCenter = cy.value + pathRadius.value * Math.sin(θ)
    // translate needs top-left; we have center → subtract orbiter radius
    return {
        tx: `${xCenter - orbiterRadius.value}px`,
        ty: `${yCenter - orbiterRadius.value}px`,
    }
}

// expose CSS vars for keyframes
const orbitVars = computed(() => {
    const p0 = pointAt(0.00)
    const p1 = pointAt(0.25)
    const p2 = pointAt(0.50)
    const p3 = pointAt(0.75)
    const p4 = pointAt(1.00)
    return {
        '--x0': p0.tx, '--y0': p0.ty,
        '--x1': p1.tx, '--y1': p1.ty,
        '--x2': p2.tx, '--y2': p2.ty,
        '--x3': p3.tx, '--y3': p3.ty,
        '--x4': p4.tx, '--y4': p4.ty,
        '--dur': '30s',
    } as Record<string, string>
})

</script>

<template>
    <div v-if="dimension.width && dimension.height" ref="mainElement"
        :class="[mainContainer.positionX, mainContainer.positionY]"
        :style="{ borderWidth: `${dimension.borderWidth}px` }"
        class="absolute w-100 h-100 rounded-full border-(--pz-chrome)/20">
        <div ref="smallCircleRef" class="absolute rounded-full border-(--pz-chrome)/20 orbiting will-change-transform"
            :style="{
                ...orbitVars,
                width: `${props.orbiter.width}px`,
                height: `${props.orbiter.height}px`,
                borderWidth: `${props.orbiter.borderWidth}px`,
            }">
        </div>
    </div>

</template>

<style scoped>
.orbiting {
    animation: orbit var(--dur) linear infinite;
}

@keyframes orbit {
    0% {
        transform: translate(var(--x0), var(--y0));
    }

    25% {
        transform: translate(var(--x1), var(--y1));
    }

    50% {
        transform: translate(var(--x2), var(--y2));
    }

    75% {
        transform: translate(var(--x3), var(--y3));
    }

    100% {
        transform: translate(var(--x4), var(--y4));
    }
}
</style>