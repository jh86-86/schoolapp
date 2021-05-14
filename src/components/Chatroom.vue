<template>
  <div>
      <h1>Chatroom</h1>
      <button v-on:click="sendMessage('hello world')">Send</button>
  </div>    
</template>

<script>
export default {
    data(){
        return{
        connection:null,
        }
    },
    methods:{
        sendMessage: function(message){
            console.log(this.connection);
            this.connection.send(message);
        }
    },
    created(){
        console.log('starting connection to websocket server');
        this.connection= new WebSocket("wss://echo.websocket.org");

        this.connection.onopen = function(event){
            console.log(event);
            console.log('successfully connected to server of echo Websocket server')
        }

        this.connection.onmessage =function(event){
            console.log(event); //when messaged received console log event otu
        }
    }
}
</script>

<style>

</style>