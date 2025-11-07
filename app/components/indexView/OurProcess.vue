<script setup lang="ts">
import { phases } from "@/assets/data/phase/data"
import SectionImg from "@/assets/img/section-bg.jpg"
const getPhaseStyle = (index: number) => {
    // even index → one direction, odd index → reversed
    return index % 2 === 0
        ? "bg-linear-to-b from-(--pz-bg-2) to-(--pz-neon)/20"
        : "bg-linear-to-b from-(--pz-neon)/20 to-(--pz-bg-2)"
}


</script>


<template>
    <section class="sect-container">
        <div v-for="phase in phases" :key="phase.id"
            class="relative flex flex-col items-center justify-center gap-10 h-fit lg:min-h-300 p-2"
            :class="getPhaseStyle(phase.id)">

            <div class="w-10 h-full absolute left-0 bg-(--pz-neon)/10"></div>
            <div class="w-[.1rem] h-full absolute left-20 bg-(--pz-yellow)"></div>
        

            <div class="flex flex-col xl:flex-row items-center xl:items-stretch gap-2">

                <div class="relative w-full border border-(--pz-chrome">

                    <!-- main image -->
                    <div class="relative">
                        <img :src="phase.image" :alt="phase.title + ' phase'" class="shadow-2xl shadow-white/30 border-2 border-(--pz-yellow)">
                        <div class="absolute flex flex-col items-center justify-center top-0 right-0 border-2 w-25 h-25 bg-(--pz-neon)/50">
                            <span>phase</span>
                            <span class="cyber font-bold text-2xl">{{ phase.title }}</span>
                        </div>
                    </div>

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
            <div class="lg:w-1/2 w-full flex flex-col gap-2 relative">
                <div class="hidden lg:block absolute inset-0 bevel bg-(--pz-purple)/20"></div>
                <p class="text-left lg:text-center text-2xl lg:text-4xl">{{ phase.phaseDescription }}</p>
            </div>


        </div>

    </section>
</template>