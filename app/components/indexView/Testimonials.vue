<script lang="ts" setup>
const testimonials = [
    {
        qtext: "Parallax-9 redefined the frontier of consciousness commerce.",
        name: "Dr. Valen Hiroshi",
        jobPosition: "CEO",
        company: "NexaCorp Industries"
    },
    {
        qtext: "No simulation has ever felt so dangerously real.",
        name: "Nyx Vega",
        jobPosition: "Neural Interface Architect",
        company: "Aquila Systems"
    },
    {
        qtext: "Our executive cohort returned with sharper intuition and measurable creative lift.",
        name: "Elias Kade",
        jobPosition: "Chief Strategy Officer",
        company: "Orpheon Dynamics"
    },
    {
        qtext: "The line between memory and possibility? Parallax-9 erased it.",
        name: "Mirei Cho",
        jobPosition: "Founder",
        company: "Synapse Atelier"
    }
]

</script>

<template>

    <!-- endoresments from the elite -->
    <section class="sect-container">
        <h1 class="section-title">Trusted by the Architects of Tomorrow</h1>
        <div class="flex flex-col gap-10">
            <div v-for="testimonial in testimonials" :key="testimonial.name" class="flex flex-col gap-2 text-4xl">
                <q>Parallax-9 redefined the frontier of consciousness commerce.</q>
                <div class="flex flex-row itmes-center gap-2">
                    <span>-</span>
                    <span class="font-bold">{{ testimonial.name }}</span>
                    <span>{{ testimonial.jobPosition }}</span>
                    <span class="font-bold">{{ testimonial.company }}</span>
                </div>
            </div>
        </div>
    </section>

</template>