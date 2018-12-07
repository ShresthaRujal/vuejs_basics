import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import { request } from 'https';

Vue.use(VueResource);

Vue.http.options.root='https://testproject-b7cef.firebaseio.com/';

Vue.http.interceptors.push((request,next) => {
  console.log(request.method);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
