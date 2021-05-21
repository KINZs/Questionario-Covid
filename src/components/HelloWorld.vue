<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <component :is="currentState" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Question from "./Question";
import SchoolIntro from "./SchoolIntro";
import Result from "./Result";
import { store } from "../store";
export default {
  components: { Question, Result, SchoolIntro },
  store,
  data() {
    return {};
  },
  computed: {
    currentState() {
      return this.$store.state.currentState;
    },
  },
  created() {
    this.$store.commit("setCurrentState", "school-intro");
  },
};
</script>
