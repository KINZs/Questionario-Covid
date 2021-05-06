<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <component :is="currentState"/>
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
import Result from "./Result";
import { store } from "../store";
export default {
  components: { Question, Result },
  store,
  data() {
    return {};
  },
  computed: {
    question() {
      return this.$store.state.question;
    },
    currentState() {
      return this.$store.state.currentState;
    },
    currentValue() {
      console.log(this.$store.state.currentValue);
      return this.$store.state.currentValue;
    },
  },
  methods: {
    moveOn() {
      let next_question = this.$t(`question.${this.question}.next["${this.currentValue}"]`)
      if (next_question.split("_")[0] == 'r'){
        this.$store.commit("setCurrentState", "result");
      }
      this.$store.commit("setQuestion", next_question);
      this.$store.commit("setCurrentValue", null);
    },
  },
  created() {
    this.$store.commit("setQuestion", "q_travel");
    this.$store.commit("setCurrentState", "question");
  },
};
</script>
