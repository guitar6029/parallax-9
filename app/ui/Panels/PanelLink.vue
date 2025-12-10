<script setup lang="ts">
import type { RouteLocationAsPathGeneric, RouteLocationAsRelativeGeneric } from 'vue-router';
import Panel1 from './Panel-1.vue';

defineProps<{
    toPath: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric | undefined,
    label: string | undefined,
    isActive: boolean
}>()
</script>


<template>
    <NuxtLink :to="toPath"  :class="[isActive ? 'text-(--pz-neon)' : '']"
        class="group inline-flex items-center justify-center trns hover:text-(--pz-neon) relative cursor-none px-6 py-6">
        <div class="absolute inset-0 z-1">
            <Panel1 width="w-full h-full" />
        </div>
        <span class="group-hover:scale-105 trns cyber text-xl text-center tracking-[5px] relative z-10 pointer-events-none">{{ label ??
            ' ' }}</span>
    </NuxtLink>
</template>