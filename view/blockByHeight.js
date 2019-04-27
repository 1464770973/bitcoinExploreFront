var app = new Vue({
    el:'#app',
    data:{
        showBlockHeight:'',
        blockheight:'',
        
    },
    mounted () {
        console.log("view mounted");
        var url = new URL(location.href);
        var height = url.searchParams.get("blockheight");
        this.getBlockByHeight(height);
    },
    methods: {
        getBlockByHeight(height){
            axios.get('http://localhost:8080/block/getBlockDetailByHeight',{
                params:{
                    blockheight:height
                }
            })
            .then(function(response){
                console.log(response);
                app.showBlockHeight = response.data;
            })
            .catch(function(error){
                console.log(error);
            });
        }
        
    }
})