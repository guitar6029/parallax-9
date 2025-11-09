<script setup lang="ts">


const props = withDefaults(defineProps<{
    numLength?: number

}>(), {
    numLength: 10

})

const getCharacter = (i: number) => {
    return i % 2 == 0 ? `px 00${i}` : "_"
}
</script>

<template>
    <div class="absolute font-tech text-md top-0 right-0 w-fit h-fit flex flex-col items-center justify-center gap-2">
        <span v-for="i in numLength">{{ getCharacter(i) }}</span>
    </div>
</template>