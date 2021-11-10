<template>
  <div class="card" >
    <div class="card-body">
        <h5 class="card-title text-center"> {{name}}</h5>
         <p class="card-text text-center">
              {{info.temperature}}
         </p>
    <p class="card-text text-center">
        {{info.wind}}
    </p>
<p class="card-text text-center">
        {{info.description}}
    </p>
    <div class="row">
    <div class="col" v-for="forecast in info.forecast" :key="forecast.day" >
        <forecast :day="forecast.day" 
        :temp="forecast.temperature" 
        :wind="forecast.wind"> 
        </forecast>
        
        
    </div>
  </div>
  </div>
</div>
</template>

<script>
import Forecast from './Forecast.vue'
export default {
  components: { Forecast },
    props: ['info', 'name']

}
</script>

<style>

</style>