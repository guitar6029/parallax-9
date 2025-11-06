<script lang="ts" setup>
import Testimonials from "~/components/indexView/Testimonials.vue";
import NetworkExpands from "~/components/indexView/NetworkExpands.vue";
import Metrics from "~/components/indexView/Metrics.vue";
import Philosophy from "~/components/indexView/Philosophy.vue";
</script>

<template>
    <div class="flex flex-col gap-40 p-2">
        <P9Hero />
        <NetworkExpands />
        <Testimonials />
        <Metrics />
        <Philosophy />
    </div>
</template>