<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from "vue";

let errorNoise = ref<HTMLAudioElement | null>(null);
type CMCView = "loading" | "error";

const currentView = ref<CMCView>("loading");

const isLoading = ref(true);

const emit = defineEmits<{
  cancel: [];
}>();

function initCMC() {
  setTimeout(() => {
    currentView.value = "error";
    errorNoise.value = new Audio("/sfx/error.mp3");
    if (!errorNoise.value) return;
    errorNoise.value.play();
  }, 3500);
}

onMounted(() => {
  initCMC();
});

onBeforeUnmount(() => {
  isLoading.value = false;
  if (!errorNoise.value) return;
  errorNoise.value.pause();
  errorNoise.value.currentTime = 0;
});

const currentCMCview = computed<CMCView>(() => {
  return currentView.value;
});
</script>

<template>
  <div class="relative w-full h-full flex flex-col gap-2">
    <Icon
      @click="$emit('cancel')"
      name="material-symbols:cancel-presentation"
      size="4rem"
      class="absolute top-0 right-1 cursor-pointer trns hover:text-(--pz-neon)"
      >X</Icon
    >
    <div
      v-if="currentCMCview === 'loading'"
      class="h-full flex flex-col gap-2 items-center justify-center"
    >
      <span class="uppecase font-tech text-4xl">Loading...</span>
    </div>
    <div
      v-if="currentCMCview === 'error'"
      class="h-full flex flex-col gap-2 items-center justify-center"
    >
      <span
        class="font-tech font-bold text-4xl lg:text-6xl text-(--pz-neon) tracking-[0.35em]"
      >
        CONSTRUCT STREAM OFFLINE
      </span>

      <div
        class="border border-(--pz-neon/40) text-2xl bg-black/60 px-6 py-4 max-w-2xl flex flex-col gap-2 shadow-[0_0_40px_rgba(0,255,255,0.25)]"
      >
        <p class="font-mono text-(--pz-chrome)">
          OOPS. Our cortex relay just failed an empathy check.
        </p>
        <p class="font-mono opacity-80 leading-relaxed">
          The Parallax-9 Construct Matrix is temporarily unavailable due to an
          off-world outage. Your session has been flagged as
          <span class="text-(--pz-neon)">NEXUS-RED</span> and routed to a human
          compliance officer.
        </p>
        <p class="font-mono opacity-70 leading-relaxed">
          Please contact
          <span class="text-(--pz-neon)">Technical Support Node // PZ-9</span>
          and reference incident code
          <span class="text-(--pz-purple)">"TEARS-IN-CACHE-2049"</span>.
        </p>
      </div>

      <p class="font-mono opacity-60 tracking-widest">
        IF YOU'RE SEEING THIS, YOU'RE EITHER VERY EARLY... OR VERY HUMAN.
      </p>

      <button
        class="mt-2 px-6 py-2 border border-(--pz-neon/60) font-mono text-xl tracking-[0.3em] uppercase trns hover:bg-(--pz-neon/10)"
        @click="$emit('cancel')"
      >
        RETURN TO CATALOG
      </button>
    </div>
  </div>
</template>
