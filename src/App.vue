<template> 
<div>
  <h1>My name is {{name}} </h1>
  <button class="btn" v-bind:class="{'btn-primary' : !isDanger, 'btn-danger': isDanger} " @click="isDanger=!isDanger">Click me</button>
</div>
</template>

<script>
export default {
    props: ['name'],
    data(){
        return{
            isDanger: false
        }
    }
}
</script>

<style>

</style>