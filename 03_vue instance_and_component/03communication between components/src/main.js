import Vue from 'vue'
import App from './App.vue'

//1 way easy way to emit the changes,
//export const eventBus = new Vue();

//other way to emit
export const eventBus = new Vue({
  methods:{
    changeAge(age){
      this.$emit('ageWasEdited',age);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
});


