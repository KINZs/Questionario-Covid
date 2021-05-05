<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <checkbox-question v-bind:q="$t(currentQuestion)"/>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn x-large color="primary" :disabled="!currentValue" @click="moveOn"> {{$t('continuebutton')}} </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CheckboxQuestion from './CheckboxQuestion.vue';
import {store} from '../store';
export default {
  components: { CheckboxQuestion },
  store,
  question:null, 
  // name: "HelloWorld",
  
  data() {
    return {
      
    };
  },
  computed:{
    currentQuestion(){
      return this.question;
    },
    currentValue(){
      console.log(this.$store.state.currentValue)
      return this.$store.state.currentValue;
    }
  },
  methods:{
    moveOn(){
      console.log(this.$store.state.question.next[this.currentValue])
      this.question = `questions.${this.$store.state.question.next[this.currentValue]}`
      this.$store.commit("setCurrentValue", null);
    }
  },
  created(){
    this.question = 'questions.QUESTAO_1';
  }
};
</script>
