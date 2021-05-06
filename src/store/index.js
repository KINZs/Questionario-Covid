import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    answers: {}, 
    currentValue: null,
    question:null,
    currentState: null,
    result:null,
  },
  mutations: {
    setAnswer(state, answer){
      console.log(answer)
      state.answers[answer.text] = answer.value;
      state.currentValue = answer.value;
    },
    setCurrentValue(state, value){
      state.currentValue = value;
    },
    setQuestion(state, question){
      state.question = question;
    },
    setCurrentState(state, value){
      state.currentState = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
