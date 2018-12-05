new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false,
        title:"rujal shrestha",
        damagedPlayerHealth:0,
        damagedMonsterHealth:0,
    },
    methods:{
        startGame: function(){
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack: function(){
            this.damagedMonsterHealth = this.calculateDamage(3,10); 
            this.monsterHealth -=this.damagedMonsterHealth;
            this.checkHealth();
            
            this.damagedPlayerHealth = this.calculateDamage(5,12);
            this.playerHealth -=this.damagedPlayerHealth;
            this.checkHealth();
        },
        specialAttack: function(){
            this.damagedMonsterHealth = this.calculateDamage(10,20); 
            this.monsterHealth -=this.damagedMonsterHealth;
            this.checkHealth();
            
            this.monsterAttack();
        },
        heal:function(){
            if(this.playerHealth<=90){
                this.playerHealth +=10;
            }            
            this.monsterAttack();
        },
        giveUp: function(){
            this.gameIsRunning=false;
        },
        calculateDamage:function(min,max){
            var min_atk= min;
            var max_atk= max;
            return damage = Math.max(Math.floor(Math.random()*max)+1,min)
        },
        monsterAttack: function(){
            this.damagedPlayerHealth = this.calculateDamage(5,12);
            this.playerHealth -= this.damagedPlayerHealth
            
            this.checkHealth();
        },
        checkHealth: function(){
            if(this.monsterHealth <=0){
                if(confirm('You won! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning=false;
                }
            }
            
            if(this.playerHealth <=0){
                if(confirm('You loose! New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning=false;
                }                
            }
        }
    }
})