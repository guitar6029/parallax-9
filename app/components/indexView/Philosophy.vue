<script setup lang="ts">
import SectionImg from "@/assets/img/section-bg.jpg"
</script>

<template>
    <!-- manifesto -->
    <section class="sect-container h-screen relative">

        <div class="z-10">
            <img :src="SectionImg" alt="ethereal cyberpunk dreamscape"
                class="absolute inset-0 w-full h-full object-cover z-0 opacity-50" />
        </div>

        <div class="flex flex-col items-center gap-4 z-11 text-center px-4">
            <h1 class="section-title">
                From <span class="text-(--pz-neon)">Thought</span> to
                <span class="text-(--pz-purple)">Immersion</span>
            </h1>
            <h4 class="text-3xl italic font-tech">
                "Every CMC begins as an idea — and ends as an awakening."
            </h4>

            <p class="text-xl md:text-2xl leading-relaxed tracking-wide text-(--pz-chrome)/90
        max-w-3xl mx-auto font-light italic">
                Each Curated Memory Construct is forged where human intent meets synthetic precision.
                Parallax-9 transcends the physical threshold — fabricating new worlds designed, tested,
                and emotionally tuned for those who crave more than existence.
            </p>

            <p class="text-xl md:text-2xl leading-relaxed tracking-wide text-(--pz-chrome)/90
        max-w-3xl mx-auto font-light italic">
                Reality isn’t broken. It’s <span class="text-(--pz-neon)">obsolete</span>.<br />
                Memory is our medium; consciousness, our canvas.<br />
                Each Construct defies entropy.<br />
                Each participant is an architect of the next epoch.
            </p>
        </div>
    </section>
</template>
