<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-row align="center" justify="center">
          <div class="text-h3 mb-5">
            {{$t(`schoolQuestionnaire.initialScreen.title`)}}
          </div>
          <div class="text-h4 mb-5">
            {{$t(`schoolQuestionnaire.initialScreen.subtitle`)}}
          </div>
          <v-alert border="bottom" colored-border type="warning" elevation="2"
            >{{$t(`schoolQuestionnaire.initialScreen.alert`)}}
          </v-alert>
        </v-row>
        <v-col align="center" justify="center">
          <p>
            {{$t(`schoolQuestionnaire.initialScreen.body`)}}
          </p>
        </v-col>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn x-large color="primary" @click="startQuestions">
          {{$t(`schoolQuestionnaire.initialScreen.button`)}}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "schoolintro",
  methods: {
    startQuestions() {
      this.$store.commit("setQuestion", "q_travel");
      this.$store.commit("setCurrentState", "question");
    },
  },
};
</script>