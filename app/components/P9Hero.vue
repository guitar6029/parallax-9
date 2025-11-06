<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import HeroImage from '@/assets/img/hero4.jpg';
const hasMounted = ref(false);
onMounted(() => {
    hasMounted.value = true;
});
</script>

<template>
    <div v-if="hasMounted" class="relative w-full h-screen overflow-hidden">
        <!-- Background Image -->
        <img :src="HeroImage" alt="Synthetic Android" class="absolute inset-0 w-full h-full object-cover z-0" />

        <!-- Overlay Content -->
        <Transition name="slide-in" mode="out-in" appear>

            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 class="text-[4rem] md:text-[6rem] lg:text-[8rem] font-bold tracking-tight cyber">Parallax-9</h1>
                <span class="text-2xl font-light opacity-80">
                    Reality is overrated. Experience something else.
                </span>
            </div>
        </Transition>
    </div>
</template>

