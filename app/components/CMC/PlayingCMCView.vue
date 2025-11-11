<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import type { CMC } from "@/types/CMC"

type CMCView = 'loading' | 'prescreen' | 'privacy' | 'enjoy' | 'playing'

const currentView = ref<CMCView>('loading')

const isLoading = ref(true)
const displayedPrivacyAgreement = ref(false)
const props = defineProps<{
    cmc: CMC | null
}>()

const emit = defineEmits<{
    cancel: []
}>()

function initCMC() {
    //displayedPrivacyAgreement.value = true
    // after 6 seconds switch to different view
    //something else, maybe start animation or something
    setTimeout(() => {
        currentView.value = "prescreen"
    }, 6000)

}

onMounted(() => {
    initCMC()
})

onBeforeUnmount(() => {
    isLoading.value = false
})

const currentCMCview = computed<CMCView>(() => {
    return currentView.value
})

</script>


<template>
    <div class="relative w-full h-full flex flex-col gap-2">
        <Icon @click="$emit('cancel')" name="material-symbols:cancel-presentation" size="4rem"
            class="absolute top-0 right-1 cursor-pointer trns hover:text-(--pz-neon)">X</Icon>
        <div v-if="currentCMCview === 'loading'" class="h-full flex flex-col gap-2 items-center justify-center">
            <span class="uppecase font-tech text-4xl">Loading...</span>
            <div class="progress-bar border-2 w-1/2 h-20">
                <div class="w-full h-full progress"></div>
            </div>

        </div>
        <div v-if="currentCMCview === 'prescreen'" class="h-full flex flex-col gap-2 items-center justify-center">
            <span class="uppecase font-tech text-4xl">Initializing CMC...</span>
            <div class="progress-bar border-2 w-1/2 h-20">
                <div class="h-full progress"></div>
            </div>
        </div>
    </div>

</template>


<style scoped>
.progress {
    background-color: var(--pz-neon);
    animation: progress-line 70s ease-out linear;
}

@keyframes progress-line {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

/* 
@keyframes progress-line {
    0% {
        width: 0;
        opacity: .2;
    }

    25% {
        width: 25%;


    }

    50% {
        width: 50%;
        opacity: .2;
    }

    75% {
        width: 75%;
        opacity: .2;
    }

    95% {
        width: 95%;
        opacity: .2;
    }

    98% {
        width: 98%;
        opacity: .2;
    }

    99% {
        width: 99%;
        opacity: .2;
    }

    100% {
        width: 100%;
        opacity: .2;
    }
} */
</style>