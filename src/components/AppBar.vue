<template>
  <v-app-bar class="AppBar elevation-2 overflow-y-auto" dense fixed color="#fcb69f" dark
    src="https://lh3.googleusercontent.com/proxy/h3SzlLgiiNv6qtGrjeYaSz7aILMgwreplLdorOWyVDNAaWkMhTKUWI1YQng0m1tbYzU2zICDMsU9vGNO-WlEDd9aBRaVwwcFY2kiNhh29XPRUA"
    app height="85px">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
    </template>

    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title> {{ $t("appname") }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon v-if="user" text @click="logout">
      <!-- <span class="mr-2">{{ $t('logout') }}</span> -->
      <v-icon>{{ icons.mdiLogout }}</v-icon>
    </v-btn>
    
    <v-btn icon text><LocaleChanger /></v-btn>

    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon @click="toggleThemeDarkMode">
          <v-icon :style="{transform: `rotate(${$vuetify.theme.dark ? 0 : -190 }deg)`}">
            {{ icons.mdiThemeLightDark }}
          </v-icon>
        </v-btn>
      </template>
      <span>{{ $t(($vuetify.theme.dark ? 'light' : 'dark') + 'Mode') }}</span>
     </v-tooltip>
  </v-app-bar>

</template>

<script>
import { mapState } from 'vuex'
import { mdiLogin, mdiLogout, mdiThemeLightDark } from '@mdi/js'
import LocaleChanger from '../components/LocaleChanger'

export default {
  name: 'AppBar',
  components: {
    LocaleChanger
  },
  data () {
    return {
      icons: { mdiLogin, mdiLogout, mdiThemeLightDark }
    }
  },
  computed: {
    ...mapState('User', [
      'user'
    ]),
    isLoginPage () {
      return this.$router.currentRoute.name === 'login'
    }
  },
  methods: {
    login () {
      this.$router.push({ path: 'login' })
    },
    logout () {
      this.$store.dispatch('User/logout')
        .then(() => this.$router.push({ path: 'home' }))
    },
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
