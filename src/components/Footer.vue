<template>
 <v-footer
    padless
    fixed color="primary lighten-1" 
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ $t(link) }}
      </v-btn>
      <v-col
        class="primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong> Timao </strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      links: [
        'home',
        'aboutUs',
        'team',
        'termsOfService',
        'dataPolicy',
      ],
    }),
  }
</script>