<script lang="ts" setup>
import { testimonials } from '@/assets/data/testimonials/data'
</script>

<template>
    <section class="sect-container mt-20 relative flex flex-col items-center justify-center">
        <!-- Background shape layer -->
        <!-- <div class="absolute inset-0 z-10 hidden md:flex items-center justify-center">
            <div class="w-200 h-150 bg-(--pz-neon)/10 border-0 border-l-2 shape-2">
            </div>
        </div> -->
        <!-- Main content -->
        <div class="relative z-30 flex flex-col gap-10 items-center text-center">
            <h1 class="section-title">Trusted by the Architects of Tomorrow</h1>

            <div class="flex flex-col gap-10 max-w-5xl">
                <div v-for="testimonial in testimonials" :key="testimonial.name" class="flex flex-col gap-2 text-4xl">
                    <q>Parallax-9 redefined the frontier of consciousness commerce.</q>
                    <div class="flex flex-row items-center gap-2">
                        <span>-</span>
                        <span class="font-bold">{{ testimonial.name }}</span>
                        <span>{{ testimonial.jobPosition }}</span>
                        <span class="font-bold">{{ testimonial.company }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
