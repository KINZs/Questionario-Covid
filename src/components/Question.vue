<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h3">{{ $t(`${question}.title`) }}</div>
      </v-col>
    </v-row>
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
  </v-container>
</template>

<script>
import { store } from "../store";
export default {
  store,
  data() {
    return {
    };
  },
  computed: {
    q() {
      return this.$store.state.question;
    },
    question() {
      return `questions.${this.q}`;
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