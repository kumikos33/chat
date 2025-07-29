// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: "2024-11-01",
//   devtools: { enabled: true },
//   future: {
//     compatibilityVersion: 4,
//   },

//   css: ["~/assets/css/main.css"],

//   modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/mdc"],

//   runtimeConfig: {
//     openaiAPIKey: process.env.OPENAI_API_KEY,
//   },

//   mdc: {
//     highlight: {
//       theme: "material-theme-palenight",
//       langs: ["html", "markdown", "vue", "typescript", "javascript", "bash"],
//     },
//   },
// });
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  modules: ["@nuxt/eslint"],
});
