<template>
    <v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="name in sources"
          :key="name"
          cols="12"
          sm="4"
          >

            <v-img
            :src= name
            ></v-img>

          </v-col>
          
        </v-row>

    <footer>
    </footer>
    </v-container>
</template>

<script>

export default ({
  data() {
    return {
      sources: ['/logo_bureau_des_goodies.png',
                '/logo_corep.png',
                '/logo_gallodrome.png',
                '/logo_laser_weez.jpg',
                '/logo_one_brain.PNG',
                '/logo_planet_bowling.png',
                '/logo_pumpkin.png',
                '/logo_weembi.png'
              ]
    }
  },

})
</script>