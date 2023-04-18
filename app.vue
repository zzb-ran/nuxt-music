<template>
  <div>
    <v-app id="inspire">
      <v-system-bar>
        <v-spacer></v-spacer>
        <v-icon>mdi-square</v-icon>

        <v-icon>mdi-circle</v-icon>

        <v-icon>mdi-triangle</v-icon>
      </v-system-bar>

      <v-navigation-drawer v-model="drawer" permanent absolute>
        <v-sheet color="grey-lighten-4" class="pa-4">
          <v-avatar class="mb-4" color="grey-darken-1" size="64">
            123
          </v-avatar>
          <div>123456@gmail.com</div>
        </v-sheet>

        <v-divider></v-divider>

        <v-list nav>
          <v-list-item
            v-for="[icon, text, link] in links"
            :key="icon"
            active-color="primary"
            :prepend-icon="icon"
            :title="text"
            :value="link"
            :to="link"
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container class="py-8 px-6" fluid>
          <LazyNuxtPage />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
const drawer = ref(null);
const links = [
  ["mdi-home", "Index", "/"],
  ["mdi-equalizer", "Recommend", "/recommend"]
];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  color: black;
}
</style>
