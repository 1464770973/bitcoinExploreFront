var app = new Vue({
    el:'#app',
    data:{
        showTrannsactionTxhash:[],
        txhash:'',
        
    },
    mounted () {
        console.log("view mounted");
        var url = new URL(location.href);
        var txhash = url.searchParams.get("txhash");
        this.getTransactionBtTxhash(txhash);
    },
    methods: {
        getTransactionBtTxhash(txhash){
            axios.get('http://localhost:8080/transaction/getTransctionByTxhash',{
                params:{
                    txhash:txhash
                }
            })
            .then(function(response){
                console.log(response);
                app.showTrannsactionTxhash = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
        }
        
    }
})