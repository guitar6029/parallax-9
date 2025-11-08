<script lang="ts" setup>
import { onMounted, ref } from "vue";
const hasMounted = ref(false);
onMounted(() => {
    hasMounted.value = true
})


useHead({
    title: "Parallax-9 — Curated Memory Constructs",
    meta: [
        {
            name: "description",
            content:
                "Step into Parallax-9, a realm of Curated Memory Constructs — immersive cyberpunk experiences blending design, emotion, and technology.",
        },
    ],
});
</script>

<template>
    <div v-if="hasMounted"
        class="flex flex-col p-2 relative overflow-x-hidden bg-linear-to-b from-(--pz-bg-2) to-(--pz-bg)">
        <P9Hero />
        <div class="absolute top-20 left-20 w-2 h-2 bg-(--pz-chrome) movement-square"></div>
        <div class="absolute top-20 left-40 w-2 h-2 bg-(--pz-chrome) movement-square"></div>
    </div>
</template>
