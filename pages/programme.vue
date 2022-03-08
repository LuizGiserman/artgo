<template>
<v-container
      fill-height
      fill-width>
        <v-row 
        >
          <v-col
          v-for="n in programme"
          :key="n"
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
                {'titre': 'Intégration', 'topics':                      ["Continuer sur les acquis des Puls’art dans l’intégration des internationaux (traduction des posts et site internet en anglais notamment).",
                                                                         "Favoriser la diversité des cultures musicales dans nos événements (musiques d’ambiance) en partenariat avec le Club Time.",
                                                                         "Communiquer avec l’ENSCL et son BDA pour concrétiser la fusion de la vie associative artistique.",
                                                                         "Organiser un concours pour refaire le design du T-shirt donné par Centrale le premier jour de l’intégration.",
                                                                         "Refaire des chants de promo centraliens en collaboration avec le BDS et CLIC, pour pouvoir défendre correctement et respectueusement Centrale face aux autres écoles lors des tournois sportifs notamment."]},
                
                {'titre': 'Améliorations', 'topics':                    ["Élargir TDN au maximum aux autres écoles de la métropole lilloise et du Nord, en faisant davantage de communication, notamment auprès des écoles qui participaient à l’événement avant le covid.",
                                                                         "Augmenter la communication sur les Icares afin de représenter fièrement notre école face aux autres Centrales.",
                                                                         "Repenser le format de la newsletter pour la rendre plus accessible et attractive : la faire sous forme de podcasts ou de petites vidéos.",
                                                                         "Revaloriser le groupe sorties du BDA, et publier chaque mois sur promo le planning des événements artistiques des assos de centrale."]},                           

                {'titre': 'Nouveaux événements', 'topics':              ["Organiser un carnaval à la Rez, en partenariat avec les autres BDX.",
                                                                        "Faire renaître le festival de théâtre étudiant Paon d’Art, perdu depuis 2019 à cause du Covid. Ce festival regroupant plusieurs associations d’écoles de la métropole lilloise proposait des représentations de théâtre, improvisation, comédie musicale ou encore de danse.",
                                                                        "Organiser une exposition Centralienne afin de mettre en valeur les diverses productions artistiques des étudiants ; ceux qui le souhaitent pourront également participer à un concours à thème d’une durée d’une semaine."]},
                
                {'titre': 'Autres événements', 'topics':                ["Poursuivre sur les acquis de nos aînés : sorties culturelles & bons plans sur Lille, renouvellement des anciens événements (TDN, ICares, GOSt, sortie inter à Paris, Rallille, Fête de la musique avec les profs et alumnis).",
                                                                         "Élever le nombre de GOSt à 3 pour permettre à davantage de gens de se produire, voire même en réserver un aux performances musicales pour libérer du temps et prolonger les performances. En effet le nombre de musiciens à l’école souhaitant s’exprimer est conséquent et le planning des GOSt est déjà très chargé. Tous n’ont donc pas l’occasion de se produire pour le moment."]},
                
               
                {'titre': 'Divers', 'topics':                           ["Limiter notre production de déchets et notre impact écologique lors de nos événements (surtout au niveau de la nourriture), et suivre nos progrès à l’aide de bilans carbones réguliers. ",
                                                                         "Promouvoir l’utilisation de la bibli autrement que comme un local associatif, en organisant régulièrement des évènements culturels divers et variés dans un cadre plus calme que des soirées 20h-00h : soirées karaokés / petites expositions / braderie de livres…",
                                                                         "Aider à la gestion administrative des événements des associations artistiques et culturelles de l’école à leur demande, et leur apporter au besoin un soutien financier."]},

                {'titre': 'Développer la culture générale', 'topics':   ["Instaurer une habitude de publications 2 fois par semaine du BDA sur Centrash et notre page insta, de petites infos de culture G random.",
                                                                        "Soirée Questions pour un Centralien, 20h-00h au foyer, afin de développer la culture G à Centrale, avec évidemment prix à la clé."]},
                
            ]
        }
    },


}
</script>