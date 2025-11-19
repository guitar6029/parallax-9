import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui"],
  css: ["~/assets/css/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      { name: "Rajdhani", weights: [400, 600, 700] },
      { name: "Exo 2", weights: [400, 500, 700] },
    ],
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["model-viewer"].includes(tag),
    },
  },
});
