<template>
    <div class="card" >
        <div class="card-body">
            <h5 class="card-title text-center"> {{day}}</h5>
                 <p class="card-text text-center">
                      {{temp}}
                </p>

                  <p class="card-text text-center">
                       {{wind}}
              </p>
         </div>
    </div>
</template>

<script>
    export default {
        props: ['day','temp', 'wind']
}
</script>

<style>

</style>