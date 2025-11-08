<script setup lang="ts">
import { ref, onMounted } from 'vue'

const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <!-- Loading screen -->
  <div v-if="!ready" class="h-dvh flex items-center justify-center bg-(--pz-bg)">
    <span class="cyber text-6xl tracking-widest">LOADING…</span>
    <NuxtPage />
  </div>

  <!-- App -->
  <UApp v-else>
    <div class="h-dvh overflow-hidden flex">
      <!-- LEFT: Main column (main + footer) -->
      <div class="flex flex-1 min-w-0 flex-col">
        <main class="flex-1 min-h-0 overflow-y-auto bg-(--pz-bg)">
          <NuxtPage />
        </main>
        <!-- <P9Footer class="shrink-0" /> -->
      </div>

      <!-- RIGHT: Sidebar (full height) -->
      <P9Sidebar />
    </div>
  </UApp>
</template>
