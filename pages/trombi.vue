<template>
    <v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="n in membres"
          :key="n.src"
          cols="12"
          sm="4"
          >

            <FlipBox :src=n.src :name=n.nom :phrase=n.phrase :bio=n.bio :lazy=n.lazy />

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

      noms:     ["Maëlys Degremont", "Maxime Cochet", "Maud Ravanas-Deshays", "Julianna Mangold", "Clement Lérou", "Jean Clément", "Blandine Oizon", "Thomas Ducruet", "Amélie Erard", "Félicie Nguyen",
                 "Baptiste Ayrignac", "Élisa Kazmierczak", "Hugo Hourez", "Marion Levrat", "Romain Marty", "Marie Ferreyra","Benjamin Belaygue", "Thomas Guyon", "Luiz Fabião Giserman", "Jing (Éva) Zeng", "Sirine Akkari"],

      phrases:  [this.$t("phraseMaelys"),
                 this.$t("phraseMaxime"),
                 this.$t("phraseMaud"),
                 this.$t("phraseJulianna"),
                 this.$t("phraseClement"),
                 this.$t("phraseJean"),
                 this.$t("phraseBlandine"),
                 this.$t("phraseDucruet"),
                 this.$t("phraseAmelie"),
                 this.$t("phraseFelicie"),
                 this.$t("phraseBaptiste"),
                 this.$t("phraseElisa"),
                 this.$t("phraseHugo"),
                 this.$t("phraseMarion"),
                 this.$t("phraseRomain"),
                 this.$t("phraseMarie"),
                 this.$t("phraseBenjamin"),
                 this.$t("phraseGuyon"),
                 this.$t("phraseLuiz"),
                 this.$t("phraseEva"),
                 this.$t("phraseSirine")],

      bios:     [
                this.$t("bioMaelys"),
                 this.$t("bioMaxime"),
                 this.$t("bioMaud"),
                 this.$t("bioJulianna"),
                 this.$t("bioClement"),
                 this.$t("bioJean"),
                 this.$t("bioBlandine"),
                 this.$t("bioDucruet"),
                 this.$t("bioAmelie"),
                 this.$t("bioFelicie"),
                 this.$t("bioBaptiste"),
                 this.$t("bioElisa"),
                 this.$t("bioHugo"),
                 this.$t("bioMarion"),
                 this.$t("bioRomain"),
                 this.$t("bioMarie"),
                 this.$t("bioBenjamin"),
                 this.$t("bioGuyon"),
                 this.$t("bioLuiz"),
                 this.$t("bioEva"),
                 this.$t("bioSirine")],
    
    }
  },

  computed:{

    membres: function () {

      let persons = [];
      let tempSrc;
      let tempLazySrc;
      let numPhotos = this.prenomSrc.length;

      for (let i = 0; i < numPhotos; i++){
        tempSrc = "/PP_" + this.prenomSrc[i] + ".png";
        tempLazySrc = "/compressed/PP_" + this.prenomSrc[i] + "-min.png"
        persons.push({'src': tempSrc, 'lazy': tempLazySrc ,'nom': this.noms[i], 'phrase': this.phrases[i], 'bio': this.bios[i]})
      }

      return persons;
    },
  }
  
})
</script>


<style scoped>

</style>
