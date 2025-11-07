<script lang="ts" setup>
import { testimonials } from '@/assets/data/testimonials/data'
</script>

<template>
    <section class="sect-container mt-20 relative flex flex-col items-center justify-center">

        <div class="absolute inset-0 z-10 hidden lg:flex items-center justify-center">
            <div class="w-400 h-500 bg-(--pz-neon)/5 bevel">
            </div>

        </div>
        <div class="absolute inset-0 z-11 hidden lg:flex items-center justify-center">
            <div class="w-200 h-250 bg-(--pz-neon)/10 bevel">
            </div>

        </div>
        <!-- <div class="absolute inset-0 z-12 hidden lg:flex items-center justify-center">
            <div class="w-100 h-150 bg-(--pz-neon)/20 bevel">
            </div>

        </div> -->

        <div class="relative z-30 flex flex-col gap-10 items-center text-center">
            <h1 class="section-title">Trusted by the <span class="text-(--pz-neon)">Architects</span> of Tomorrow</h1>

            <div class="flex flex-col gap-10 max-w-5xl">
                <div v-for="testimonial in testimonials" :key="testimonial.name"
                    class="flex flex-col items-center justify-center gap-2 text-4xl">
                    <q class="italic text-(--pz-chrome)">{{ testimonial.qtext }}</q>
                    <span class="font-bold">{{ testimonial.name }}</span>
                    <span>{{ testimonial.jobPosition }}</span>
                    <span class="font-bold">{{ testimonial.company }}</span>
                </div>
            </div>
        </div>
    </section>
</template>
