var fisrtInstance = new Vue({
    el:'#app',
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