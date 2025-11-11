<script setup lang="ts">
withDefaults(
    defineProps < {
        width?: string
    height?: string
    strokeOuter?: string
    strokeInner?: string
    fillOuter?: string
    fillInner?: string
    } > (),
    {
        width: "w-200",
        height: "h-full",
        strokeOuter: "var(--pz-chrome)",
        strokeInner: "var(--pz-chrome)",
        fillOuter: "none",
        fillInner: "none",
    }
)
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" :class="[width, height]" viewBox="0 0 340 95" fill="none">
        <!-- inner path -->
        <path
            d="M10.6332 38.9337C9.25116 37.1726 8.5 34.9987 8.5 32.76V17.4839C8.5 11.9041 13.0664 7.40367 18.6456 7.48495L292.182 11.4698C296.089 11.5267 299.605 13.8543 301.184 17.4288L326.299 74.2971C329.219 80.9076 324.378 88.3371 317.152 88.3371H54.2676C51.197 88.3371 48.2965 86.9264 46.4008 84.5108L10.6332 38.9337Z"
            :stroke="strokeInner" :fill="fillInner" />

        <!-- Outer path -->
        <path
            d="M2.33673 36.4461C1.14173 34.7572 0.5 32.7391 0.5 30.6702V10.5C0.5 4.91398 5.07624 0.411086 10.6616 0.501334L297.36 5.13382C301.395 5.19902 304.996 7.68356 306.489 11.4331L334.045 80.6378C336.66 87.2043 331.823 94.3371 324.755 94.3371H48.4719C45.2266 94.3371 42.1831 92.7623 40.3086 90.113L2.33673 36.4461Z"
            :stroke="strokeOuter" :fill="'none'" />
    </svg>
</template>
