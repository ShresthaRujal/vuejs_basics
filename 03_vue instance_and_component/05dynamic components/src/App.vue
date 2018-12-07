<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent='appHello'">Hello</button>
                <button @click="selectedComponent='appAddress'">Address</button>
                <p>{{selectedComponent}}</p>
                
                <!-- keep-alive helps to preserve component.
                if the next component is called 'deactivated' function is called for previously opend component.
                and 'activated' function is called for next component.    -->
                <keep-alive>
                <component :is="selectedComponent"></component>
                </keep-alive>
                <!-- <app-hello>
                    <h3 slot="title">{{messageTitle}}</h3>
                    <p slot="para">welcome!</p>
                    <p>how ever if slot/name is not mentioned with in the tag then slot is called default slot.</p>
                </app-hello> -->
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
            messageTitle : 'Hello World!',
            selectedComponent: 'appHello'
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
