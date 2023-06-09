// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";

export default defineNuxtConfig({
  alias: {
    "@/hooks": "/hooks",
    "@/interface": "/interface"
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "http://localhost:4000"
    }
  },
  build: {
    transpile: ["vuetify", "@mdi/font"]
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        if (config.plugins !== undefined) {
          config.plugins.push(vuetify());
        }
      });
    }
  ]
});
