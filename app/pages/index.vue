<script lang="ts" setup>
import Testimonials from "~/components/indexView/Testimonials.vue";
import NetworkExpands from "~/components/indexView/NetworkExpands.vue";
import Metrics from "~/components/indexView/Metrics/Metrics.vue";
import Philosophy from "~/components/indexView/Philosophy.vue";
import OurProcess from "~/components/indexView/OurProcess.vue";
import { onMounted, ref } from "vue";
const hasMounted = ref(false);
onMounted(() => {
    hasMounted.value = true
})

</script>

<template>
    <div v-if="hasMounted" class="flex flex-col p-2 relative overflow-x-hidden">
        <P9Hero />
        <div class="p-20 flex flex-col bg-linear-to-b from-(--pz-neon)/20 to-(--pz-bg-2)">
            <NetworkExpands />
            <Testimonials />
            <Metrics />
        </div>
        <Philosophy />
        <OurProcess />



        <!-- ACCENTS -->
        <div
            class="hidden md:absolute md:top-0 md:left-0 md:h-100 md:w-20 md:flex md:flex-col md:items-center md:justify-center md:gap-2 bg-(--pz-neon)/50  border-0 border-b-2 border-(--pz-neon) animate-[neonPulse_5s_ease-in-out_infinite]">
            <span v-for="letter in 'parallax-9'" class="cyber uppercase tracking-widest">
                {{ letter }}
            </span>
        </div>
        <div class="hidden md:block md:absolute md:top-[150vh] md:left-0 md:h-400 md:w-5  bg-(--pz-neon)/20">
        </div>
        <div class="absolute top-[50vh] -right-70 h-200 w-100  bg-(--pz-neon)/10 ">
        </div>
        <!-- END OF ACCENTS -->

    </div>
</template>
