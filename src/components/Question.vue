<template>
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
    changeSelection() {
      this.$store.commit("setAnswer", {
        text: this.$t(`${this.question}.title`),
        value: this.selection,
      });
    },
  },
};
</script>