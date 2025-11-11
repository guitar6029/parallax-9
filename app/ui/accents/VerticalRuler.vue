<script setup lang="ts">

withDefaults(defineProps<{
    numLength?: number
    textSize?: string

}>(), {
    numLength: 10,
    textSize: 'text-md'

})

const getCharacter = (i: number) => {
    return i % 2 == 0 ? `px 00${i}` : "_"
}
</script>

<template>
    <div class="absolute font-tech top-0 right-0 w-fit h-fit flex flex-col items-center justify-center gap-2">
        <span v-for="i in numLength" :class="[textSize]">{{ getCharacter(i) }}</span>
    </div>
</template>