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
    <div class="flex flex-col gap-2 p-2">
        <P9Hero />
        <section class="bg-(--pz-bg) centered-col text-center gap-10 p-2">
            <h1 class="section-title">The Network Expands</h1>
            <span class="text-3xl">Over 1,500 Curated Memory Constructs Activated</span>
            <!-- bg-(--pz-bg-2) p-2 rounded-xl  -->
            <p class="text-3xl">Each CMC is a handcrafted neural immersion —
                a tailored reality engineered by our Dream Architects,
                experienced by minds across <b>27 megacities </b>and <b>9 orbital sectors.</b></p>
            <p class="text-3xl italic">Continuously expanding. Each upload strengthens the Parallax-9 Network.</p>
            <div class="flex max-w-2xl flex-col lg:flex-row lg:flex-wrap gap-4 items-center justify-center">
                <P9Metric label="CMC Network" value="1500+" short-label="Active Constructs online" />
                <P9Metric label="Neural Satisfaction Index" value="98%" short-label="Post-experience rating" />
                <P9Metric label="Conscious Hours Experienced" value="4.8M+" short-label="Total time across users" />
                <P9Metric label="Shared Vision: Rewrite Reality" value="1" />
            </div>
        </section>

        <!-- endoresments from the elite -->
        <section class="bg-(--pz-bg) centered-col text-center gap-10 p-2">
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


        <section class="bg-(--pz-bg) centered-col text-center gap-10 p-2">
            <div class="flex max-w-6xl flex-col lg:flex-row lg:flex-wrap gap-4 items-center justify-center">
                <P9Metric label="Response Rate" value="98%"  />
                <P9Metric label="Average rating" value="4.9/5"  />
            </div>
            <span class="italic">All testimonies verified through the Neural Integrity Protocol. Synthetic identities protected.</span>
        </section>
    </div>
</template>