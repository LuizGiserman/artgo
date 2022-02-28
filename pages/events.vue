<template>
<div>

  <h1 class="text-center">
    Retrouve notre planning d’events de la semaine !! On t’attend avec impatience !!
  </h1>



  <div class="containerAnimate">
    <v-img
          style="
            position: absolute;
          "
          contain
          src="/prato.jpg"
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
  height: 60vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-top: 3%;
}
</style>
