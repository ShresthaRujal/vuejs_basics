<template>
    <div class="app">
        <div class="row">
            <div class="col-sm-8">
                <h1>Filters and Mixin</h1>
                <p>{{text | toUpperCase}}</p>
                <p>{{text | toLowerCase}}</p>

                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">
                        {{fruit}}
                    </li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
import List from './List.vue';
import {fruitMixin} from './fruitMixin';
export default {
    mixins:[fruitMixin],
    data(){
        return{
            text: 'Hello World!', 
            // fruits:['Apple','Banana','Mango','Papaya'],
            // filterText:''
        }
    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase();
        } 
    },
    // computed:{
    //     filteredFruits(){
    //         return this.fruits.filter((element) => {
    //             return element.match(this.filterText);
    //         });
    //     }
    // },
    components:{
        appList: List
    }
}
</script>

<style scoped>

</style>
