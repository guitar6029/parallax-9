<template>
  <UApp>
    <!-- Lock to viewport; prevent page scroll -->
    <div class="h-dvh overflow-hidden flex">
      <!-- LEFT: Main column (main + footer) -->
      <div class="flex flex-1 min-w-0 flex-col">
        <!-- The only scroller -->
        <main class="flex-1 min-h-0 overflow-y-auto">
          <NuxtPage />
        </main>

        <!-- Footer sits under MAIN only -->
        <P9Footer class="shrink-0" />
      </div>

      <!-- RIGHT: Sidebar (full height) -->
      <P9Sidebar />
    </div>
  </UApp>
</template>
