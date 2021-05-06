<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html { // vuetify reset
  overflow-y: auto !important;
  overflow-x: auto !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}
body {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #585858;
  margin: 5;
}
</style>
