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
  </div>

  <!-- App shell -->
  <UApp v-else>
    <div class="h-dvh overflow-hidden flex">
      <!-- LEFT: main column -->
      <div class="flex flex-1 min-w-0 flex-col">
        <!-- <main class="flex-1 min-h-0 overflow-y-auto bg-(--pz-bg)"> -->
        <main class="flex-1 min-h-0 bg-(--pz-bg)">
          <!-- Layout wrapper enables /layouts/main.vue -->
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </main>
        <!-- <P9Footer class="shrink-0" /> -->
      </div>

      <!-- RIGHT: Sidebar -->
      <P9Sidebar />
    </div>
  </UApp>
</template>
