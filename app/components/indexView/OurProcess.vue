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
        <!-- TODO create component for the shapes  -->
        <!-- <div class="absolute hidden lg:flex bottom-10 h-full w-200 bg-(--pz-neon)/5 shape-4 z-10">
        </div>
        <div class="absolute hidden lg:flex bottom-0 left-10 h-full w-200 bg-(--pz-neon)/10 shape-4 z-20">
        </div>
        <div class="absolute hidden lg:flex -bottom-10 left-20 h-full w-200 bg-(--pz-neon)/10 shape-4 z-30">
        </div> -->

        <div class="min-h-[50dvh] flex flex-col gap-4 items-center justify-center">
            <h1 class="section-title">From <span class="text-(--pz-neon)">Thought</span> to <span
                    class="text-(--pz-purple)">Immersion</span></h1>
            <h4 class="text-3xl italic">"Every CMC begins as an idea — and ends as an awakening."</h4>
            <p class="text-3xl w-full lg:w-1/2">Each Curated Memory Construct is meticulously assembled through a
                closed-loop triad of
                creation.
                Every stage merges human intent with synthetic precision.</p>
        </div>
    </section>
    <section class="sect-container ">



        <div v-for="phase in phases" :key="phase.id"
            class="flex flex-col items-center justify-center gap-10 h-fit lg:min-h-300 p-2"
            :class="getPhaseStyle(phase.id)">

            <div class="flex flex-col xl:flex-row items-center xl:items-stretch gap-2">
                <div class=" flex flex-row items-center justify-center  gap-2">
                    <div
                        class="font-tech flex flex-col items-center justify-center w-50 h-full font-bold border-2 border-(--pz-chrome) border-l-24 rounded-2xl rounded-tr-none rounded-br-none bg-(--pz-neon)/50 z-10">
                        <div class="flex flex-col items-start gap-2">
                            <span class="uppercase">Phase</span>
                            <span class="text-8xl">{{
                                phase.title
                            }}</span>
                        </div>


                    </div>
                    <div class=" min-w-[100px] border border-(--pz-chrome">
                        <img :src="phase.image" :alt="phase.title + ' phase'" class="shadow-2xl shadow-white/30">
                    </div>
                </div>
            </div>


            <div class="flex flex-col items-start gap-2 z-20">
                <h4 class="text-6xl text-(--pz-purple) cyber">{{ phase.subtitleText }}</h4>
            </div>


            <div class="lg:w-1/2 w-full flex flex-col gap-2">
                <p class="text-left lg:text-center text-2xl lg:text-4xl">{{ phase.phaseDescription }}</p>
            </div>

            <!-- <Icon name="material-symbols:arrow-outward-rounded" class="text-(--pz-neon)" /> -->


        </div>

    </section>
</template>