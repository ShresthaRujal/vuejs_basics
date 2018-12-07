<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I am {{name}}!</p>
        <p>Age is {{age}}</p>
        <button @click="changeName">Change my Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail 
                :name="name" 
                @nameWasReset="name =$event" 
                :resetFn="resetName"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit 
                :userAge="age"
                @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>    
</template>

<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';

export default {
    data: function () {
        return {
            name:'Rujal',
            age:'26'
        };
    },
    methods:{
        changeName(){
            this.name = "Rujal Shrestha";
        },
        resetName(){
            this.name='Rujal'; 
        }
    },
    components:{
        appUserDetail: UserDetail,
        appUserEdit: UserEdit,
    }    
}
</script>

<style scoped>

</style>
