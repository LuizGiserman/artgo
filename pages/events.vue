<template>
<div>
  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h4 text-h5">
      Retrouve notre planning d’events de la semaine !
    </h1>
    <h1 class="text-center text-md-h4 text-h5">
      On t’attend avec impatience !
    </h1>
  </v-card>


  <div class="containerAnimate">
    <v-img
          style="
            position: absolute;
          "
          src="/planning.png"
          >
    </v-img>
  </div>

</div>



</template>

<script>

export default ({
  
})
</script>


<style scoped>
h1 {
  color: black;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;
  font-size: 200%;
  
}

.containerAnimate{
  height: 80vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-top: 3%;
}
</style>
