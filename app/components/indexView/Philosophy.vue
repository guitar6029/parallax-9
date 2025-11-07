<!-- <script lang="ts" setup>
import SectionImg from "@/assets/img/section-bg.jpg"

import { ref, onMounted, onBeforeUnmount } from "vue"

let rAFScheduled = false
const section3Div = ref<HTMLElement | null>(null)
const bgLayer = ref<HTMLElement | null>(null)

let scroller: HTMLElement | Window = window

function getScrollParent(el: HTMLElement | null): HTMLElement | null {
    if (!el) return null
    let p: HTMLElement | null = el.parentElement
    while (p) {
        const st = getComputedStyle(p)
        const oy = st.overflowY
        if (/(auto|scroll)/.test(oy) && p.scrollHeight > p.clientHeight) {
            return p
        }
        p = p.parentElement
    }
    return null
}

onMounted(() => {
    // find and bind to the actual scroller
    const sp = getScrollParent(section3Div.value)
    scroller = sp ?? window
    // initial position + listeners
    section3BgScroll()
    scroller.addEventListener('scroll', section3BgScroll as any, { passive: true })
    window.addEventListener('resize', section3BgScroll)
    // debug
    console.log('Parallax bound to:', scroller === window ? 'window' : scroller)
})

onBeforeUnmount(() => {
    scroller.removeEventListener?.('scroll', section3BgScroll as any)
    window.removeEventListener('resize', section3BgScroll)
})

function section3BgScroll() {
    if (!section3Div.value || !bgLayer.value) return

    const rect = section3Div.value.getBoundingClientRect()
    const isVisible = rect.bottom >= 0 && rect.top <= window.innerHeight
    if (!isVisible) return

    const viewportCenter = window.innerHeight / 2
    const sectionCenter = rect.top + rect.height / 2
    let progress = (viewportCenter - sectionCenter) / rect.height
    if (progress > 1) progress = 1
    else if (progress < -1) progress = -1

    const maxDriftPx = 24
    const offsetY = progress * maxDriftPx

    if (rAFScheduled) return
    rAFScheduled = true
    const el = bgLayer.value
    requestAnimationFrame(() => {
        el!.style.transform = `translate3d(0, ${offsetY}px, 0)`
        rAFScheduled = false
    })
}


</script> -->
<script setup lang="ts">
import SectionImg from "@/assets/img/section-bg.jpg"
</script>
<template>
    <!-- manifesto -->
    <section class="sect-container h-screen relative">
        <div class="z-1">
            <img :src="SectionImg" alt="ethereal cyberpunk dreamscape"
                class="absolute inset-0 w-full h-full object-cover z-0 opacity-50" />
        </div>
        <div class="flex flex-col items-center gap-2 z-10">
            <h1 class="section-title">Reality isn &apos;t broken.</h1>
            <h1 class="section-title">It&apos;s <span class="text-(--pz-neon)">obsolete.</span></h1>
            <blockquote class="text-3xl leading-relaxed max-w-3xl">
                <p>Parallax-9 exists to transcend the physical threshold.</p>
                <p>We fabricate new worlds — designed, tested, and emotionally tuned for those who crave more than
                    existence.</p>
                <p>Memory is our medium. Consciousness, our canvas.</p>
                <p>Each Construct is a rebellion against entropy.</p>
                <p>Each participant, an architect of the next epoch.</p>
            </blockquote>
        </div>
    </section>
</template>