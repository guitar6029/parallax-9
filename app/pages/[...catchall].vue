<template>
  <div
    class="h-screen flex flex-col gap-2 items-center justify-center text-center"
  >
    <h1 class="font-tech text-6xl text-(--pz-neon)">404 — SIGNAL LOST</h1>
    <p class="font-mono text-(--pz-chrome)/70 text-sm max-w-md">
      Construct not found. It may have been archived or erased.
    </p>

    <NuxtLink
      to="/"
      class="mt-2 px-6 py-2 border border-(--pz-neon)/60 hover:bg-(--pz-neon)/10 font-mono text-xl"
    >
      Return to Gateway
    </NuxtLink>
  </div>
</template>
