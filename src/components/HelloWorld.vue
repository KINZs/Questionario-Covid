<template>
  <v-container v-if="introStage">
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-row align="center" justify="center">
          <div class="text-h3 mb-5">Triagem da COVID-19 em escolas e creches</div>
          <div class="text-h4 mb-5">Responda às seguintes perguntas para ajudá-lo a decidir se você deve ou não ir à escola / creche hoje.</div>
          <v-alert
            border="bottom"
            colored-border
            type="warning"
            elevation="2">Everyone in your household must stay home if anyone has COVID-19 symptoms or is waiting for test results after experiencing symptoms.
            <br><br>
            Stay home until the person with symptoms gets a negative COVID-19 test result, or is cleared by public health, or is diagnosed with another illness.
            </v-alert>
        </v-row>
        <v-col align="center" justify="center">
          <p>This screening cannot diagnose you. If you have medical questions, consult a health care provider or your local public health unit. Listen to the advice of your local public health unit first, as their advice overrules the advice in this screening</p>
          <p>You must screen for COVID-19 every day before going to school/child care.</p>
          <p>Using this tool is optional. If your school board, child care provider, or public health unit has another screening process, you can use that instead.</p>
        </v-col>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn
          x-large
          color="primary"
          @click="startQuestions"
        >
        Start school screening
        </v-btn>
      </v-col>
    </v-row>
    </v-container>
    <v-container v-else>
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
    return { introStage:false };
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
    startQuestions() {
      this.introStage = false;
      this.$store.commit("setQuestion", "q_travel");
      this.$store.commit("setCurrentState", "question");
    }
  },
  created() {
    this.introStage = true;
  },
};
</script>
