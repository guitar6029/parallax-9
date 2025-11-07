<script lang="ts" setup>
import Testimonials from "~/components/indexView/Testimonials.vue";
import NetworkExpands from "~/components/indexView/NetworkExpands.vue";
import Metrics from "~/components/indexView/Metrics.vue";
import Philosophy from "~/components/indexView/Philosophy.vue";
import OurProcess from "~/components/indexView/OurProcess.vue";
</script>

<template>
    <div class="flex flex-col p-2">
        <P9Hero />
        <div class="p-20 flex flex-col bg-linear-to-b from-(--pz-neon)/20 to-(--pz-bg-2)">
            <NetworkExpands />
            <Testimonials />
            <Metrics />
        </div>

        <Philosophy />
        <OurProcess />
    </div>
</template>