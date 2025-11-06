<template>
    <div class="relative w-full h-screen overflow-hidden">
        <!-- Background Image -->
        <img :src="HeroImg" alt="Synthetic Android" class="absolute inset-0 w-full h-full object-cover z-0" />

        <!-- Overlay Content -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            <h1 class="text-[10rem] font-bold tracking-tight">Parallax-9</h1>
            <span class="text-2xl font-light opacity-80">
                Reality is overrated. Experience something else.
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import HeroImg from "@/assets/img/hero4.jpg"
</script>
