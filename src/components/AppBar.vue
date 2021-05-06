<template>
  <v-app-bar class="AppBar elevation-2 overflow-y-auto" dense fixed color="primary lighten-1"
    
    app height="85px">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title class="white--text"> {{ $t("appname") }}</v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn text><LocaleChanger /></v-btn>
    <!-- <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon @click="toggleThemeDarkMode">
          <v-icon :style="{transform: `rotate(${$vuetify.theme.dark ? 0 : -190 }deg)`}">
            {{ icons.mdiThemeLightDark }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ $t(($vuetify.theme.dark ? 'light' : 'dark') + 'Mode') }}</span>
     </v-tooltip> -->
  </v-app-bar>

</template>

<script>
import { mdiThemeLightDark } from '@mdi/js'
import LocaleChanger from '../components/LocaleChanger'

export default {
  name: 'AppBar',
  components: {
    LocaleChanger
  },
  data () {
    return {
      icons: { mdiThemeLightDark }
    }
  },
  methods: {
    toggleThemeDarkMode () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss">
.AppBar {
  v-app-bar {
    position: fixed;
  }
  v-app-bar-title {
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    padding-left: 25px;
  }
}
</style>
