<template>
    <v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="brand in sponsors"
          :key="brand"
          cols="12"
          sm="4"
          >

            <a :href=brand.link>
              <v-img
              :src= brand.src
              ></v-img>
            </a>
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
      sponsors: [
                  { src : '/logo_bureau_des_goodies.png', link : 'https://www.bureau-des-goodies.fr/'},
                  { src : '/logo_corep.png', link : 'https://www.corep.fr/'},
                  { src : '/logo_gallodrome.png', link : 'https://www.legallodrome.com/'},
                  { src : '/logo_laser_weez.jpg', link : 'https://laserweez.fr/'},
                  { src : '/logo_one_brain.PNG', link : 'https://onebrainlille.com/'},
                  { src : '/logo_planet_bowling.png', link : 'https://www.planetbowling.com/'},
                  { src : '/logo_weez.png', link : 'https://www.weezjump.com/'},
                  { src : '/logo_cice.png', link : 'https://www.cicevoyages.com/fr/index.php'},
                  { src : '/logo_weembi.png', link : 'https://www.weembi.com/'}
                ]
              
    }
  },

})
</script>