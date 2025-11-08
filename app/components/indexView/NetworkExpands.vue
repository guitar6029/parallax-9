<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const sectionRef = ref<HTMLDivElement | null>(null)
const isVisible = ref(false)

let observer: IntersectionObserver | null = null

function handleIntersection([entry]: IntersectionObserverEntry[]) {
    // Since threshold is 0.25, this will be true when >= 25% shows, false when it drops below.
    isVisible.value = !!entry?.isIntersecting
}

onMounted(() => {

    const el = sectionRef.value
    if (!el) return

    observer = new IntersectionObserver(handleIntersection, {
        root: null,          // null = viewport
        rootMargin: '0px',   // offset margin (like CSS margin)
        threshold: 0.25      // trigger when 25% visible
    })

    observer.observe(el)
})

onBeforeUnmount(() => {
    //clean up
    //get the element from the ref
    const el = sectionRef.value
    // if el and observer exists then unobserve 
    if (observer && el) observer.unobserve(el)
    //disonnect 
    observer?.disconnect()
    // make null to finish the clean up
    observer = null
})

</script>

<template>
    <section ref="sectionRef" class="sect-container mt-20 relative">
        <h1 class="relative text-left hidden xl:block section-title z-100 top-5 left-10 p-2 bg-(--pz-neon)/50"
            :class="isVisible ? 'text-(--pz-yellow)' : 'text-(--pz-chrome)'">
            The Network Expands
        </h1>
        <h1 class="section-title block lg:hidden" :class="isVisible ? 'text-(--pz-yellow)' : 'text-(--pz-chrome)'">The
            Network Expands</h1>
        <span class="text-3xl">Over 1,500 Curated Memory Constructs Activated</span>
        <p class="text-3xl">Each CMC is a handcrafted neural immersion —
            a tailored reality engineered by our Dream Architects,
            experienced by minds across <b>27 megacities </b>and <b>9 orbital sectors.</b></p>
        <p class="text-3xl italic">Continuously expanding. Each upload strengthens the Parallax-9 Network.</p>
        <div class="flex max-w-6xl flex-col xl:flex-row xl:flex-wrap gap-4 items-center justify-center">
            <P9Metric label="Active Constructs" value="1500+" short-label="Active Constructs Online" />
            <P9Metric label="Neural Index" value="98%" short-label="Post-experience rating" />
            <P9Metric label="Conscious Hours" value="4.8M+" short-label="Total time across users" />
            <P9Metric label="Shared Vision" value="1" short-label="Global Initiative" />
        </div>
    </section>
</template>