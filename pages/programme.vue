<template>
<v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="n in programme"
          :key="n.key"
          cols="12"
          sm="4"
          >

          <program maxwidth="100%" :title=n.titre :items=n.topics />

          <v-spacer/>
          <v-spacer/>
            
          </v-col>
          
        </v-row>

    <footer>
    </footer>
    </v-container>
</template>

<style scoped>

</style>

<script>
import program from '~/components/program.vue'
export default {
  components: { program },
    data () {
        return {
            programme: [
                {'titre': this.$t("integration"), 'topics':             [this.$t("topicInte1"),
                                                                         this.$t("topicInte2"),
                                                                         this.$t("topicInte3"),
                                                                         this.$t("topicInte4"),
                                                                         this.$t("topicInte5"),], 'key': "integr"},
                
                {'titre': this.$t("ameliorations"), 'topics':           [this.$t("topicAme1"),
                                                                         this.$t("topicAme2"),
                                                                         this.$t("topicAme3"),
                                                                         this.$t("topicAme4"),], 'key': "amel"},

                {'titre': this.$t("nouveaux-evenements"), 'topics':     [this.$t("topicNE1"),
                                                                        this.$t("topicNE2"),
                                                                        this.$t("topicNE3"),], 'key': "NE"},
                
                {'titre': this.$t("autres-evenements"), 'topics':       [this.$t("topicAE1"),
                                                                         this.$t("topicAE2"),], 'key': "AE"},
                
               
                {'titre': this.$t("divers"), 'topics':                   [this.$t("topicDivers1"),
                                                                         this.$t("topicDivers2"),
                                                                         this.$t("topicDivers3"),], 'key': "divers"},

                {'titre': this.$t("culture-general"), 'topics':          [this.$t("topicCulture1"),
                                                                          this.$t("topicCulture2"),], 'key': "culture"},
                
            ]
        }
    },


}
</script>