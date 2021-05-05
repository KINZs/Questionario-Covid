<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <question />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn
          x-large
          color="primary"
          :disabled="!currentValue"
          @click="moveOn"
        >
          {{ $t("continuebutton") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Question from "./Question.vue";
import { store } from "../store";
export default {
  components: { Question },
  store,
  data() {
    return {};
  },
  computed: {
    question() {
      return this.$store.state.question;
    },
    currentValue() {
      console.log(this.$store.state.currentValue);
      return this.$store.state.currentValue;
    },
  },
  methods: {
    moveOn() {
      let next_question = this.$t(`questions.${this.question}.next["${this.currentValue}"]`)
      console.log(next_question)
      this.$store.commit("setQuestion", next_question);
      this.$store.commit("setCurrentValue", null);
    },
  },
  created() {
    this.$store.commit("setQuestion", "q_travel");
  },
};
</script>
