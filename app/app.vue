<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const ready = ref(false);
const x = ref(0);
const y = ref(0);
const visible = ref(true);

function handleMove(e: PointerEvent) {
  x.value = e.clientX;
  y.value = e.clientY;
  if (!visible.value) visible.value = true;
}

onMounted(() => {
  x.value = window.innerWidth / 2;
  y.value = window.innerHeight / 2;
  visible.value = true;
  window.addEventListener("pointermove", handleMove);
  ready.value = true;
});

onBeforeUnmount(() => {
  if (typeof window === "undefined") return;
  window.removeEventListener("pointermove", handleMove);
});
</script>

<template>
  <UApp>
    <div class="h-dvh overflow-hidden flex relative">
      <!-- Loader OVERLAY (keeps NuxtLayout/NuxtPage mounted) -->
      <div
        class="absolute inset-0 z-50 flex items-center justify-center bg-(--pz-bg)"
        v-show="!ready"
        aria-hidden="true"
      >
        <span class="cyber text-6xl tracking-widest">LOADING…</span>
      </div>

      <!-- LEFT: main column (no scroll here; layout owns scroll) -->
      <div class="flex flex-1 min-w-0 flex-col">
        <main class="flex-1 min-h-0 bg-(--pz-bg)">
          <NuxtLayout>
            <div
              v-if="visible"
              class="fixed z-9999 pointer-events-none mix-blend-screen"
              :style="{
                transform: `translate3d(${x - 12}px, ${y - 12}px, 0)`,
              }"
            >
              <div
                class="w-8 h-8 border border-(--pz-neon) shadow-[0_0_20px_rgba(0,255,255,0.6)]"
              ></div>
            </div>
            <NuxtPage />
          </NuxtLayout>
        </main>
      </div>

      <!-- RIGHT: Sidebar -->
      <P9Sidebar />
    </div>
  </UApp>
</template>
