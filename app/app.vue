<script setup lang="ts">
import { ref, onMounted } from 'vue'
const ready = ref(false)
onMounted(() => { ready.value = true })
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
            <NuxtPage />
          </NuxtLayout>
        </main>
      </div>

      <!-- RIGHT: Sidebar -->
      <P9Sidebar />
    </div>
  </UApp>
</template>
