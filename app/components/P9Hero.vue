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
            <!-- text-shadow-[1px_1px_0_#0ff,2px_2px_0_#09f,3px_3px_0_#007] -->
            <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                <h1 class="hidden text-[4rem] xl:block xl:text-[5rem] font-bold tracking-tight cyber">Parallax-9</h1>
                <div class="flex flex-row items-center xl:hidden">
                    <div class="flex flex-col items-stretch">
                        <span class="cyber text-6xl" v-for="letter in 'parallax'">
                            {{ letter }}
                        </span>
                    </div>
                    <div class="bg-(--pz-neon)/50 h-full w-40 flex">
                        <div class="flex items-center justify-center w-full h-full">
                            <span class="cyber text-6xl">9</span>
                        </div>
                    </div>
                </div>

                <span class="text-2xl md:text-[3rem] font-semibold opacity-80 font-tech">
                    Reality is overrated. Experience something else.
                </span>
            </div>
        </Transition>
    </div>
</template>
