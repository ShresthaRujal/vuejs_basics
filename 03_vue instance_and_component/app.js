var fisrtInstance = new Vue({
    el:'#app1',
    data:{
        title:"Its the First Instance"     
    }
});

var secondInstance = new Vue({
 el:'#app2', 
 data:{
     title:"Its the Second Instance"
 },
 methods:{
     getTitleOfFirstInstance: function(){
         return fisrtInstance.title;
     }
 }
});

var vm3 = new Vue({
    template:'<h2>Hello</h2>'
});
vm3.$mount('#app4');

Vue.component('hello', {
  template: '<h2>Hello</h2>'
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
});
  
