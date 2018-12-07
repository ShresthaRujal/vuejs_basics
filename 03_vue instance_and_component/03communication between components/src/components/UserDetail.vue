<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name:{{switchName()}}</p>
        <p>User Age : {{userAge}}</p>
        <button @click="resetName">Local Rest</button>
        <button @click="resetFn()">Parent Rest</button>
    </div>
</template>

<script>
//requuirement for eventBus for emit purpose
import { eventBus } from '../main';

export default {
    // props:['name'], OR
    props:{
        name:{
            type: String,
            default: 'User'
        },
        userAge: Number,
        resetFn:Function
    },
    methods:{
        
        switchName(){
            return this.name.split("").reverse().join("");
        },
        resetName(){
            this.name='rujal';
            //$emit will pass an event to the parrent template. It takes paramaters namespace and value respectively.
           // this.$emit('nameWasRest',this.name)
        }
    },
    created:function() {
        eventBus.$on('ageWasEdited',(age) => {
            this.userAge = age;
        })
    }
}
</script>

<style>
    div{
        background-color: lightcoral;
    }
</style>
