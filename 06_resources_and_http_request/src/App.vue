<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-8">
                <h1>Http</h1>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control"
                    v-model="user.username">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="text" class="form-control"
                    v-model="user.email">
                </div>
                <button class="form-control" @click="submit">Submit</button>
                <hr>

                <button @click="fetchData">GetData</button>
                <ul>
                    <li v-for="user in users">{{user.username}} {{user.email}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            user:{
                username:'',
                email:''
            },
            users:[],
            resource:{},
        };
    },
    methods:{
        submit(){
            // basic way to 'post' 
            // this.$http.post('data.json',this.user)
            // .then(response =>{
            //     console.log(response)
            // }, error => {
            //     console.log(error)
            // });

            //2nd way
            // this.resource.save({},this.user);

            //3rd way
            this.resource.saveAlt(this.user);

        },
        fetchData(){
            this.$http.get('data.json')
            .then(response => {
                return response.json();
            }).then(data => {
                const resultArray = [];
                for(let key in data){
                    resultArray.push(data[key]);
                }
                this.users = resultArray;
            });
        },
    },
    created(){
        const customActions={
            saveAlt:{method:'POST',url:'alternative.json'}
        };
        this.resource = this.$resource('data.json',{}, customActions);
    }
}
</script>

<style>

</style>
