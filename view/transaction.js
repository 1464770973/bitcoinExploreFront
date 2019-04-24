var app = new Vue({
    el:'#app',
    data:{
        transaction:[]
        
    },
   
    mounted () {
        console.log("view mounted");
        this.getTransaction();
        
    },
    methods: {
        getTransaction(){
            axios.get('http://localhost:8080/transaction/getTransaction')
            .then(function(response){
                console.log(response);
                app.transaction = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
        },
        handleBlock(){
            console.log("clcik block");
            location.href="blockRecent.html";
        },
        handleTransaction(){
            console.log("clcick transaction");
            location.href="transaction.html";
        }
    }
})