<script setup lang="ts">
import { phases } from "@/assets/data/phase/data"
const getPhaseStyle = (index: number) => {
    // even index → one direction, odd index → reversed
    return index % 2 === 0
        ? "bg-linear-to-b from-(--pz-bg-2) to-(--pz-neon)/20"
        : "bg-linear-to-b from-(--pz-neon)/20 to-(--pz-bg-2)"
}


</script>


<template>
    <section class="sect-container relative">


        <div class="absolute hidden z-1 lg:block lg:h-100 lg:w-full trapezoid bg-(--pz-neon)/10"></div>
        <div class="absolute hidden z-2 lg:block lg:h-75 lg:w-150 trapezoid bg-(--pz-neon)/11"></div>
        <div class="min-h-[50dvh] flex flex-col gap-4 items-center justify-center">
            <h1 class="section-title">From <span class="text-(--pz-neon)">Thought</span> to <span
                    class="text-(--pz-purple)">Immersion</span></h1>
            <h4 class="text-3xl italic font-tech">"Every CMC begins as an idea — and ends as an awakening."</h4>
            <p class="text-xl md:text-2xl leading-relaxed tracking-wide text-(--pz-chrome)/90
         max-w-2xl text-center mx-auto font-light italic">
                Each Curated Memory Construct is meticulously assembled through a closed-loop
                triad of creation. Every stage merges human intent with synthetic precision.
            </p>
        </div>


    </section>
    <section class="sect-container ">
        <div v-for="phase in phases" :key="phase.id"
            class="flex flex-col items-center justify-center gap-10 h-fit lg:min-h-300 p-2"
            :class="getPhaseStyle(phase.id)">
            <div class="flex flex-col xl:flex-row items-center xl:items-stretch gap-2">

                <div class="relative w-full border border-(--pz-chrome">

                    <!-- main image -->

                    <img :src="phase.image" :alt="phase.title + ' phase'" class="shadow-2xl shadow-white/30">

                    <!-- absolute divs -->
                    <!-- for larger screens -->
                    <div class="hidden xl:flex xl:absolute -top-20 -left-20 flex-col items-center">


                        <div class="relative inline-block trns hover:skew-x-6 hover:scale-105">
                            <!-- Layer 3 (deepest shadow) -->
                            <span class="absolute inset-0 cyber text-[15rem]
           text-(--pz-neon)/10 z-0
           translate-x-1.5 translate-y-1.5">
                                {{ phase.title }}
                            </span>

                            <!-- Layer 2 (mid-tone) -->
                            <span class="absolute inset-0 cyber text-[15rem]
           text-(--pz-neon)/30 z-10
           translate-x-[3px] translate-y-[3px]">
                                {{ phase.title }}
                            </span>

                            <!-- Layer 1 (front highlight) -->
                            <span class="relative cyber text-[15rem]
           text-(--pz-neon)
           z-20 [text-shadow:0_0_8px_#0ff,0_0_16px_#09f,0_0_32px_#007]
           skew-x-6 -skew-y-6">
                                {{ phase.title }}
                            </span>
                        </div>
                    </div>

                    <!-- for smaller screens -->
                    <div class="xl:hidden flex flex-col items-start gap-2">
                        <span class="uppercase">Phase</span>
                        <span class="text-[5rem] cyber">{{
                            phase.title
                            }}</span>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-start gap-2 z-20">
                <h4 class="text-6xl text-(--pz-purple) cyber">{{ phase.subtitleText }}</h4>
            </div>
            <div class="lg:w-1/2 w-full flex flex-col gap-2">
                <p class="text-left lg:text-center text-2xl lg:text-4xl">{{ phase.phaseDescription }}</p>
            </div>


        </div>

    </section>
</template>