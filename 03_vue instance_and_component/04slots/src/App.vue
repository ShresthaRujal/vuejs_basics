<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                
                <app-hello>
                    <h3 slot="title">{{messageTitle}}</h3>
                    <p slot="para">welcome!</p>
                    <p>how ever if slot/name is not mentioned with in the tag then slot is called default slot.</p>
                </app-hello>
            </div>
        </div>
    </div>
</template>

<script>
import Hello from './components/Hello.vue';
import Address from './components/Address.vue';

export default {
    components:{
        appHello:Hello,
        appAddress:Address,
    },
    data: function(){
        return {
            messageTitle : 'Hello World!'
        }
    }
}
</script>

<style>
    div.component{
        border: 1px solid black;
        padding: 30px;
    }
</style>
