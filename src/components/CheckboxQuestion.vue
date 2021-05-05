<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h3">{{ q.title }}</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="q.type == 'checkbox'">
          <v-checkbox v-for="n in q.qoptions" :key="n.value" :value="n.value" v-model="selection"
            ><template v-slot:label>
              <div class="text-h5">
                {{ n.text }}
              </div>
            </template>
          </v-checkbox>
      </v-col>

      <v-col v-if="q.type == 'radio'">
        <v-radio-group v-model="selection" @change="changeSelection">
          <v-radio v-for="n in q.qoptions" :key="n.value" :value="n.value" 
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
import {store} from '../store';
export default {
  props: ["q"],
  store,
  data(){
    return  {
      selection: null,
    }
  },
  methods:{
    changeSelection(){
      this.$store.commit("setAnswer", {text: this.q.title, value: this.selection})
    }
  },
  mounted(){
    this.$store.commit("setQuestion", this.q)
  }
};
</script>