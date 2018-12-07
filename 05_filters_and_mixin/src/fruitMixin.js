export const fruitMixin={
    data(){
        return{
            fruits:['Apple','Banana','Mango','Papaya'],
            filterText:''
        }
    },    
    computed:{
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.filterText);
            });
        }
    }
}