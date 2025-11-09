<template>
    <div class="absolute flex flex-col gap-2 bottom-50 left-50">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>

<style scoped>
.dot {
    width: 8px;
    height: 8px;
    border: 1px solid var(--pz-neon, #ff51c8);
    background: color-mix(in srgb, var(--pz-neon, #ff51c8) 15%, transparent);
    border-radius: 2px;
    animation: trailRight 1.5s ease-in-out infinite alternate;
}

/* staggered delays + fade = trail */
.dot:nth-child(1) {
    animation-delay: 0s;
    opacity: 1;
}

.dot:nth-child(2) {
    animation-delay: .15s;
    opacity: .6;
    filter: blur(0.2px);
}

.dot:nth-child(3) {
    animation-delay: .30s;
    opacity: .3;
    filter: blur(0.3px);
}

@keyframes trailRight {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(100px);
    }
}

/* accessibility */
@media (prefers-reduced-motion: reduce) {
    .dot {
        animation: none;
    }
}
</style>
