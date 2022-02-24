<template>
    <v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="n in 21"
          :key="n"
          cols="12"
          sm="4"
          >
            <FlipBox/>

          </v-col>
          
        </v-row>

    <footer>
    </footer>
    </v-container>

</template>

<script>

export default ({
  
})
</script>


<style scoped>

</style>
