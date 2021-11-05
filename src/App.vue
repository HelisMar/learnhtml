<template> 
    <div class="container my-3">
        <web-socket></web-socket>
        <input type="text"  class="form-control" v-model="search" @keydown.enter="getWeather">
        <card v-if="info" :info="info" :name="name"> </card>
    </div>
</template>

<script>
import card from './card.vue';
import WebSocket from './WebSocket.vue';
const axios = require('axios');
export default {
  components: { card, WebSocket },
    created(){
        axios.get('https://goweather.herokuapp.com/weather/Tallinn').then(response => {
            console.log(response);
            this.info = response.data;
            this.name = 'Tallinn';
        });
    },
    data(){
        return{
            search:'',
            info: null,
            name: ''
        }
    },
    methods:{
        getWeather(){
            axios.get('https://goweather.herokuapp.com/weather/' + this.search).then(response => {
                console.log(response);
                this.info = response.data;
                this.name = this.search;
                this.search = '';
        });
        }
    }
}
</script>

<style>

</style>