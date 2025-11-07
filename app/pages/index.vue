<script lang="ts" setup>
import Testimonials from "~/components/indexView/Testimonials.vue";
import NetworkExpands from "~/components/indexView/NetworkExpands.vue";
import Metrics from "~/components/indexView/Metrics.vue";
import Philosophy from "~/components/indexView/Philosophy.vue";
import OurProcess from "~/components/indexView/OurProcess.vue";
import { onMounted, ref } from "vue";
const hasMounted = ref(false);
onMounted(() => {
    hasMounted.value = true
})

</script>

<template>
    <div v-if="hasMounted" class="flex flex-col p-2 relative">
        <P9Hero />
        <div class="p-20 flex flex-col bg-linear-to-b from-(--pz-neon)/20 to-(--pz-bg-2)">
            <NetworkExpands />
            <Testimonials />
            <Metrics />
        </div>

        <div
            class="hidden md:absolute md:top-0 md:left-0 md:h-100 md:w-20 md:flex md:flex-col md:items-center md:justify-center md:gap-2 bg-(--pz-neon)/50  border-0 border-b-2 border-(--pz-neon) animate-[neonPulse_5s_ease-in-out_infinite]">
            <span v-for="letter in 'parallax-9'" class="cyber uppercase tracking-widest">
                {{ letter }}
            </span>
        </div>
        <div
            class="hidden lg:absolute md:top-[50vh] md:right-0 md:h-200 md:w-5 md:flex md:flex-col md:items-center md:justify-center md:gap-2 bg-(--pz-text)/50  ">
        </div>
        <div
            class="hidden lg:absolute md:top-[150vh] md:left-0 md:h-200 md:w-2 md:flex md:flex-col md:items-center md:justify-center md:gap-2 bg-(--pz-neon)/50  border-0 border-b-2 border-(--pz-neon)">
        </div>
        <!-- <div
            class="hidden lg:absolute md:top-[95vh] md:left-10 md:h-40 md:w-40 md:flex md:flex-col md:items-center md:justify-center md:gap-2 bg-(--pz-neon)/20  border-0 border-l-2 border-b-2 border-(--pz-neon)">
            <span class="cyber text-4xl skew-x-26 text-(--pz-neon)
  [text-shadow:1px_1px_0_#0ff,2px_2px_0_#09f,3px_3px_0_#007]">
                P9
            </span>
        </div> -->



        <Philosophy />
        <OurProcess />
    </div>
</template>
