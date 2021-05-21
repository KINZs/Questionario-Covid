<template>
  <div>
    <v-card py-5>
      <v-card-title class="text-h4" mb-5>
        {{ $t(`${question}.title`) }}
      </v-card-title>
      <span py-3></span>
      <v-card-subtitle px-5 class="font-weight-light text-h5 text-left">
        {{ $t(`${question}.subtitle`) }}
      </v-card-subtitle>
      <v-card-text >
        <v-row>
          <v-col v-if="$t(`${question}.type`) == 'checkbox'">
            <v-checkbox
              v-for="n in $t(`${question}.qoptions`)"
              :key="n.value"
              :value="n.value"
              v-model="selection"
              ><template v-slot:label>
                <div class="text-h5">
                  {{ n.text }}
                </div>
              </template>
            </v-checkbox>
          </v-col>

          <v-col v-if="$t(`${question}.type`) == 'radio'">
            <v-radio-group v-model="selection" @change="changeSelection">
              <v-radio
                v-for="n in $t(`${question}.qoptions`)"
                :key="n.value"
                :value="n.value"
                ><template v-slot:label>
                  <div class="text-h5">
                    {{ n.text }}
                  </div>
                </template></v-radio
              >
            </v-radio-group>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
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
  </div>
</template>

<script>
import { store } from "../store";
export default {
  store,
  name: "question",
  data() {
    return {};
  },
  computed: {
    q() {
      return this.$store.state.question;
    },
    question() {
      return `question.${this.q}`;
    },
    currentState() {
      return this.$store.state.currentState;
    },
    currentValue() {
      console.log(this.$store.state.currentValue);
      return this.$store.state.currentValue;
    },
    selection: {
      set: function (value) {
        this.$store.commit("setCurrentValue", value);
      },
      get: function () {
        return this.$store.state.currentValue;
      },
    },
  },
  methods: {
    moveOn() {
      let next_question = this.$t(
        `question.${this.q}.next["${this.currentValue}"]`
      );
      if (next_question.split("_")[0] == "r") {
        this.$store.commit("setCurrentState", "result");
      }
      this.$store.commit("setQuestion", next_question);
      this.$store.commit("setCurrentValue", null);
    },
    changeSelection() {
      this.$store.commit("setAnswer", {
        text: this.$t(`${this.question}.title`),
        value: this.selection,
      });
    },
  },
};
</script>