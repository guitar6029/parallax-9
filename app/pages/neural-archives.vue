<script setup lang="ts">
import OurProcess from '~/components/NeuralArchives.vue'

definePageMeta({ layout: 'main' })

useHead({
    title: 'Our Process — Parallax-9',
    meta: [
        {
            name: 'description',
            content:
                'Discover how Parallax-9 transforms concepts into Curated Memory Constructs. From ideation to immersive realization, our process fuses technology, art, and emotion into unforgettable experiences.',
        },
    ],
})
</script>

<template>
    <OurProcess />
</template>
