<script lang="ts" setup>
defineProps<{
    label: string,
    value: string | number
    shortLabel?: string
}>();
</script>

<template>
    <div class="flex min-h-[300px] min-w-[500px] flex-col justify-center items-center gap-2 p-2 bg-(--pz-surface)/20 rounded-2xl">
        <h1 class="text-2xl lg:text-4xl font-bold">{{ label }}</h1>
        <span class="min-w-40 text-4xl font-bold font-tech p-2 roundex-xl bg-(--pz-bg-2)/50 text-(--pz-neon) ">{{ value
            }}</span>
        <span v-if="shortLabel"
            class="text-2xl font-bold font-tech p-2 rounded-xl bg-(--pz-bg-2)/50 text-(--pz-chrome) ">{{ shortLabel
            }}</span>
    </div>
</template>