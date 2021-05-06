<template>
  <div class="Home">
    <AppBar />
    <v-main>
      <HelloWorld />
    </v-main>
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import AppBar from "../components/AppBar";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    HelloWorld,
    AppBar,
    Footer,
  },
};
</script>

<style lang="scss">
.Home {
  height: 100vh;
  width: auto;
  .v-app-bar {
    h2 {
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
    }
  }
}
</style>
