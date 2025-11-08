<script lang="ts" setup>
const metricsDivRef = ref<HTMLDivElement | null>(null)
const isVisible = ref(false)
const hasTriggered = ref(false)

// metric targets
const targets = {
    activeConstructs: 1500,
    neuralIndex: 98,
    consciousHours: 4_800_000,
    sharedVision: 1,
}

// initial displays
const initialDisplays = ref({
    activeConstructs: 0,
    neuralIndex: 0,
    consciousHours: 0,
    sharedVision: 0
})

function animateCount(key: keyof typeof targets, duration = 5000) {
    const from = 0
    const to = targets[key]
    const start = performance.now()

    function tick(now: number) {
        const t = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - t, 3)
        initialDisplays.value[key] = Math.round(from + (to - from) * eased)
        if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
}

let observer: IntersectionObserver | null = null

function handleIntersection(entries: IntersectionObserverEntry[]) {

    if (!entries) return
    const entry = entries[0]


    isVisible.value = !!entry?.isIntersecting

    if (entry?.isIntersecting && !hasTriggered.value) {
        hasTriggered.value = true

        for (const key in targets) {
            animateCount(key as keyof typeof targets)
        }

        if (entry && observer) {
            // stop observing after first reveal
            observer?.unobserve(entry?.target)

        }
    }
}

onMounted(() => {

    //const el = sectionRef.value
    const el = metricsDivRef.value
    if (!el) return

    observer = new IntersectionObserver(handleIntersection, {
        root: null,          // null = viewport
        rootMargin: '0px',   // offset margin (like CSS margin)
        threshold: 0.9      // trigger when 90% visible
    })

    observer.observe(el)
})

onBeforeUnmount(() => {
    //clean up
    //get the element from the ref
    const el = metricsDivRef.value
    // if el and observer exists then unobserve 
    if (observer && el) observer.unobserve(el)
    //disonnect 
    observer?.disconnect()
    // make null to finish the clean up
    observer = null
})

</script>


<template>
    <div ref="metricsDivRef" class="flex max-w-6xl flex-col xl:flex-row xl:flex-wrap gap-4 items-center justify-center">
        <P9Metric label="Active Constructs" :value="`${initialDisplays.activeConstructs}+`"
            short-label="Active Constructs Online" />
        <P9Metric label="Neural Index" :value="`${initialDisplays.neuralIndex}%`"
            short-label="Post-experience rating" />
        <P9Metric label="Conscious Hours" :value="`${abbrev(initialDisplays.consciousHours)}+`"
            short-label="Total time across users" />
        <P9Metric label="Shared Vision" :value="`${initialDisplays.sharedVision}`" short-label="Global Initiative" />
    </div>
</template>