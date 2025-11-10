<script lang="ts" setup>

type PositionItem = {
    horizontalPos?: string
    verticalPos?: string
}

const props = withDefaults(defineProps<{
    numberOfLines?: number,
    widthIncrement?: number,
    positionItem?: PositionItem
}>(), {
    numberOfLines: 10,
    widthIncrement: 5,
    positionItem: () => ({
        horizontalPos: 'left-1',
        verticalPos: 'top-0',
    }),
})

const lineWidths = computed(() => {
    const widths: string[] = []
    const maxWidth = props.numberOfLines * 5
    for (let i = 1; i <= props.numberOfLines; i++) {
        widths.push(
            i <= props.numberOfLines / 2
                ? `${i * props.widthIncrement}px`
                : `${maxWidth - i * props.widthIncrement}px`
        )
    }
    return widths
})
</script>

<template>
    <div :class="[
        'absolute w-fit h-fit z-1 flex flex-col items-center justify-center',
        positionItem.verticalPos,
        positionItem.horizontalPos
    ]">
        <div class=" h-full flex flex-col gap-1">
            <div v-for="(width, i) in lineWidths" :key="i" class="h-[.05rem] bg-(--pz-text) animate-lines"
                :style="{ width, animationDelay: `${i * 0.1}s` }" />
        </div>
    </div>
</template>
