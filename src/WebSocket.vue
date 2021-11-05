<template>
<div>
    <input type="text" v-model="message" @keydown.enter="sendMesage">
     <ul> 
      <li v-for="(message, index) in messages" :key="index">{{message}}</li>
  </ul>
</div>
</template>

<script>
export default {
    created(){
            // Create WebSocket connection.
        this.socket = new WebSocket('ws://localhost:8080');

            // Connection opened
        this.socket.addEventListener('open', function (event) {
                socket.send('Hello Server!');
                });

            // Listen for messages
        this.socket.addEventListener('message',(event) => {
                console.log('Message from server ', event.data);
                this.messages.push(event.data);
        });
    },
    data(){
        return {
            messages: [],
            socket: null,
            message = ''
        }
    },
    methods: {
        sendMessage(){
            this.socket.send(this.messages)
            this.message = '';
        }
    }
}
</script>

<style>

</style>