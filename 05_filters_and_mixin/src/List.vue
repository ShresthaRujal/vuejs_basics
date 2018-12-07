<template>
    <div class="app">
        <div class="row">
            <div class="col-sm-8">
                <h1>Filters and Mixin</h1>

                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">
                        {{fruit}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {fruitMixin} from './fruitMixin';
export default {
    mixins: [fruitMixin]
}
</script>

<style scoped>

</style>
