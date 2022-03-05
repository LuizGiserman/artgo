<template>
    <v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="n in membres"
          :key="n"
          cols="12"
          sm="4"
          >

            <FlipBox :src=n.src :name=n.nom />

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
      prenomSrc:["Maelys", "Maxime", "Maud", "Julianna", "Clement", "Jean", "Blandine", "Ducruet", "Amelie", "Felicie",
               "Baptiste", "Elisa", "Hugo", "Marion", "Romain", "Marie", "Benjamin", "Guyon", "Luiz", "Eva", "Sirine"],

      noms:["Maëlys Degremont", "Maxime Cochet", "Maud Ravanas-Deshays", "Julianna Mangold", "Clement Lérou", "Jean Clément", "Blandine Oizon", "Thomas Ducruet", "Amélie Erard", "Félicie Nguyen",
               "Baptiste Ayrignac", "Élisa Kazmierczak", "Hugo Hourez", "Marion Levrat", "Romain Marty", "Marie Ferreyra","Benjamin Belaygue", "Thomas Guyon", "Luiz Fabião Giserman", "Jing (Éva) Zeng", "Sirine Akkari"],

      phrases:[],

      bios:[],
    
    }
  },

  computed:{

    membres: function () {

      let persons = [];
      let tempSrc;
      let numPhotos = this.prenomSrc.length;

      for (let i = 0; i < numPhotos; i++){
        tempSrc = "/PP_" + this.prenomSrc[i] + ".png";
        persons.push({'src': tempSrc, 'nom': this.noms[i]})
      }

      return persons;
    },
  }
  
})
</script>


<style scoped>

</style>
