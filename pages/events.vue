<template>
<div>
  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h4 text-h5">
      {{ $t('titleEvents1') }}
    </h1>
    <h1 class="text-center text-md-h4 text-h5">
      {{ $t('titleEvents2') }}
    </h1>
  </v-card>


  <div class="containerAnimate" :style="imageHeight">
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
  computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "height:68vh;"
          case 'sm': return "height:68vh;"
          case 'md': return "height:75vh"
          case 'lg': return "height:75vh"
          case 'xl': return "height:75vh"
        }
      }
  }
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
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-top: 3%;
}
</style>
