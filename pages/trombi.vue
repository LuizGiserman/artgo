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

      phrases:  ["Pertinente et perspicace, notre présidente a l'œil pour déceler le moindre faux pas, et sa motivation n’a pas d’égal pour toujours obtenir le meilleur résultat.",
                 "Tête en l'air, heureusement que Maxime n’est pas responsable d’un truc important comme…l’argent de la liste par exemple ! Oh wait…THIS IS FINE !",
                 "Aussi attentive aux détails qu’à l’inclusion de chacun, Maud saura concocter des plannings qui combinent habilement les contraintes de chaque Art’go.",
                 "Entre un stage au gala en tant que respo sandwich et une bonne volonté implacable notre Co-Screz connait Excel comme sa poche, et concocte en un tour de main planning ou todo list hauts en couleurs. ",
                 "Géographe dans une autre vie, notre VPE saura aisément repérer les bons plans et transformer tout trajet en rallye, pour aller récupérer des colis.",
                 "Jean",
                 "Respo dem d’exception, vous avez une interrogation ? Blandine vous donnera la réponse avant même que vous ayez eu le temps de poser la question.",
                 "Sorcier, Thomas l’est également pour vous débusquer les meilleurs plans au cinéma, au théâtre ou au musée.",
                 "Volleyeuse et bosseuse, chaleureuse mais frileuse, Amélie ne quitte ses pantoufles que pour les grandes occasions comme les concerts, les opéras et le WEI pour lesquelles elle est responsable. ",
                 "Alliant générosité, sérieux, et parfois espièglerie, Félicie saura faire communiquer à tous son énergie débordante dans ses jeux concours et pendant le WEI.",
                 "Méticuleux et débordant d’idées, notre respo comm se démènera toujours pour porter son pôle au plus près possible de la perfection.",
                 "A travers la newsletter, Elisa vous fera parvenir des mots doux sur les événements artistiques lillois et les bons plans décrochés par la dem.",
                 "Respo audiovisuel de haut niveau, Hugo saura vous donner envie de (re)faire du mooc en dansant sur de la dubstep médiévale.",
                 "Dessinatrice hors paire, Marion sublimera tous les logos et les affiches passant à portée de crayon.",
                 "Vous cherchez Romain ? Il est en soirée ! Mais en tant que respo event consciencieux, il ne fait que son travail !",
                 "Tu cherches quelque chose ? Arrête. Notre respo log sait exactement où elle l'a rangé...si si, juuuuste là... Voilà!",
                 "Chef reconnu et bientôt étoilé Benjamin aura à cœur de vous offrir de son cochon grillé durant les évents qu'il aura organisés.",
                 "Thomas est clairement né pour mettre le feu en soirée, à moins qu’il ne se le mette lui-même pour la préparer.",
                 "Informaticien du groupe, tout ce que vous proposerez à Luiz lui semblera réalisable pour mettre en valeur les events sur lesquels il aura travaillé. ",
                 "Curieuse et ouverte, notre respo bibli partage volontiers ses connaissances culturelles dans lequel le pôle event trouvera bon nombre de ses inspirations.",
                 "Respo litté, DD et démarchage concerts, musique et opéras, Sirine possède un florilège de responsabilités et ce qui est sûr c’est qu’elle est loin d’être empotée."],

      bios:     [`L'emploi du temps plus rempli que celui d'un ministre, la liste de tâches de Maëlys est encore plus interminable que ses soirées de tâches de liste. Experte de la priorisation tout pourra attendre demain à part faire des gâteaux pour réconforter son entourage. Pas besoin de dessin, elle est un ange tombé du ciel, à moins que ce soit le ciel qui s'effondre lorsqu'elle interprète Skyfall de sa voix angélique ? Chanteuse et danseuse de renom, lorsque Maëlys n'est pas sur scène, elle est en quelque sorte notre maman de substitution ; chaleureuse et accueillante mais toujours en mesure de nous reprendre si les devoirs ont mal été faits. `,
                 `“Meeeeeeerde les gars j’ai encore perdu un truc !”
Éternel tête en l’air, ce joyeux luron n’oubliera en revanche jamais de te réveiller avec son sax baryton. Aucun instrument ne lui échappe, du güiro à la flûte de pan, du tuyau d’aspirateur (wut?) à l’accordéon. Maxime c’est aussi un acteur, un chanteur et les deux à la fois.
Constamment en oscillation entre “on est pété de thunes !” et “on n’a plus un rond !”, il ne manquera jamais l’occasion de rétablir la tendance usant de son calme légendaire et de son infatigable -elle- imagination.`,
                 `Couche-tard de l’extrême, Maud est surtout une redoutable fan de Dreamcatcher et de K-pop en général, ainsi que de Lady Gaga. Enthousiaste à l’extrême, elle n’hésite pas à spammer les conv Messenger de coeurs jaunes et surtout ELLE NE SURRÉAGIT ABSOLUMENT JAMAIS, BIEN SÛR QUE NOOOON. Elle ne rate aucun message, quitte à en rattraper 270 lorsqu’elle s’absente quelque temps. Maud ne manque que rarement le cadre, sauf sur les terrains de foot et en découpage de saucisson.`,
                 `Besoin d'un bout de fromage ou de saucisson ? Fière de ses origines, Julianna accueille tout être affamé ou en quête de concentration à bras ouvert ! Ambiance détente chez la pro des plannings et des relances qui déborde de générosité et d'énergie. Hyperactive, rayonnante, danseuse éblouissante à ses (rares) heures perdues, et investie dans toutes les bonnes causes à sa portée, tout ne sera avec elle que démonstration de gentillesse, à condition de ne pas s'approcher trop près d'une table de beer pong. Même si vous ne l'aviez pas vue à cause de sa petite taille, elle ne manque pas de répartie et saura vous remettre en place. `,
                 `Miles Davis en devenir, Clément fait chauffer sa trompette à toute heure de la journée, et, à défaut de ne réussir encore à lui faire cracher du feu, il vous impressionnera en lui faisant sortir d’épais nuages de fumée. Aussi bon cadreur et monteur qu'acteur, la chaleur de Clément réside avant tout dans sa voix grave dont l'accent rappelle le Sud et Agen(g). D'une nature flegmatique, il saura pourtant défendre coûte que coûte ses idées ; prenez donc garde lorsque vous le croiserez en torcho, au risque de vous retrouver torse nu au B7 pour un film pipo.`,
                 `Jean`,
                 `Charismatique, voire autoritaire lorsqu’elle attrape sa tasse de thé, seuls une tablette de chocolat et quelques euros négociés pourront l'apaiser. Mais ne vous fiez pas à ses punchlines sévères et son regard perçant, Blandine c’est avant tout de l’humour noir et un sourire rayonnant. Memeuse à plein temps, sa communication repose essentiellement sur les gifs (prononcer guifs) et les refs à Tolkien. Vaste connaisseuse de l’art cinématographique (delonien), elle est aussi guitariste en herbe et (presque) imbattable au puissance 4.`,
                 `ABRACADABRA ! Thomas vous envoûtera avec ses tours de passe-passe, et pourra même paumer un ch’ti sous vos yeux ébahis. Fan du Japon et désireux d’entrer en possession d’un katana, il semble qu’il le soit moins des cours de japonais. Malgré sa maîtrise incontestable du karaté, sa prise de prédilection demeure les guilis. Laissez-vous également éblouir par sa connaissance du cinéma, ses talents d’acteur et sa capacité à chanter faux (pour votre bien, évidemment !). Vous l’aurez compris, cet homme est un condensé de style et de mignonnerie, à l’aise devant son public.`,
                 `Plus expressive que Jim Carrey, c'est sans aucun doute son sourire communicatif qu'elle a le plus pratiqué. Gauchère avec deux mains gauches, Amélie fait tout de travers, même de sa flûte ! Musicienne remarquable, elle est aussi une danseuse singulière -aux mouvements pluriels- qui n'hésitera pas à onduler telle une algue marine. Abonnée aux retards, mais arrivant toujours en avance, elle sera toujours à l'heure pour renchérir sur (toutes) les blagues avec pertinence et humour.`,
                 `Que ce soit pour improviser sur scène ou pour s'investir dans la réalisation de todo lists dignes d'un MOOC GdP remporté haut la main, Félicie élabore des stratégies diverses et variées pour lutter sur tous les fronts. Fervente récolteuse des cartes Harry Potter et des coupons Couzon chez Auchan, notre comète débordante d'enthousiasme a plus d'un tour dans son sac. Attention à ne pas la titiller : cette secouriste de haut niveau déjoue en un tour de bras toute tentative de s'emparer de son rhum qu'elle conserve jalousement, entre le curry et la ratatouille. Grande absente du WEL, la légende raconte qu'on l'a retrouvée apprenant la chorée sur les pistes de Risoul !`,
                 `Amoureux des mots, Baptiste a plus d’une rime à son arc (ou dans sa poche, je sais plus). Il vous envoûtera par son éloquence mais également grâce à la réalisation d’autotests (une passion aussi utile que flippante) ou le saxophone. Bref, cet homme est un talent caché à lui tout seul ! Aussi franc et drôle que professionnel du Johnny Depp, il sait se montrer ferme lorsqu’il s’agit de respecter des consignes ou des délais. Notez également ses difficultés à estimer les proportions lorsqu’il s’agit de cuisiner, vous pourriez avoir de drôles de surprises.`,
                 `Dépassée la prononciation de son nom, tout d'Elisa reflète sa sympathie. Meilleure ITEEMienne de la liste (de loin) son bon goût général ne peut que le confirmer. Habile couturière, elle maîtrise tout ce qui engage fils et aiguilles, mais, honnête et (un peu) moqueuse, pour elle, pas besoin de broder pour dire ce qu'elle pense. Souriante et "chill" en toutes circonstances, la légende raconte que lorsqu'elle s'énerve, son visage devient rouge à l'image de son homologue de la série Astérix. Mais cela arrive-t-il réellement ? Personne ne le sait.`,
                 `"-Look! Up in the sky! It's a bird -It's a plane! - It's Superman!" 
Eh non ! C'est Hugo qui fait tirer des lasers à Rémi Bachelet ! Monteur talentueux, il est aussi compositeur, mixeur, réalisateur et, derrière toute sa maladresse, cache un grand cœur. Il est aussi un  pianiste touchant, à faire vibrer son public autant que son  propre piano. Et il réussit à faire tout ça (presque) sans prendre le melon… Chapeau ! Véritable chercheur d'or, il consacre ses trop nombreuses insomnies à collecter des memes pour les partager en masse sur son créneau de comm perso du vendredi.`,
                 `De nature discrète et solitaire, Marion est surtout capable de rendre cute n’importe quelle image, d’un renard à un artichaut. Aussi adepte de la superposition de calques sur tablette graphique que de déductions, elle vous bluffera par ses tirades sherlockesques et ses skills en crochet. Bien qu’elle ne vous l’avouera jamais, elle maîtrise le C et s’est faite harcelée par le reste de la liste pour valider l’AAP. Elle traîne par ailleurs une malheureuse intolérance au lactose qui l’a privée de nombreuses crêpes lors des campagnes BDS et BDE. Mais gare à vous si vous lui reprochez de fuir les torchos, Marion n’hésite pas à dire ce qu’elle pense !`,
                 `D'un calme emblématique, le mystérieux Romain ne se révèle que proche d'une table de ping-pong ou autour d'une bière. Toujours le sourire aux lèvres, il est lecteur, guitariste et collectionneur de sous-bock de bars, ce qui fait de sa chambre une véritable caverne d’Ali Baba. Grand aventurier, randonneur et voyageur, sa meilleure expédition restera sa quête d’un plaid pour s'installer sur un fauteuil auprès du feu (qu'il a lui-même allumé évidemment, c'est un aventurier).`,
                 `Photographe le jour, pâtissière la nuit, personne ne maîtrise mieux le carrot-cake à 5h du mat' que Marie.
Micheline accomplie, elle refusera quand même une bière au profit du café de son thermos mystérieusement toujours rempli. 
Baroudeuse, d'Istanbul à Dubaï, sa connaissance du monde n'a que sa classe et son élégance pour égal. Certains diront qu'elle est discrète, d'autres qu'elle est pipelette...Bref, vous l'aurez compris notre Marie est aussi ambivalente que polyvalente, mais ce qui est absolument certain c'est qu'elle régalera vos papilles de ses meilleures recettes exécutées de ses doigts de fée. `,
                 `Cauchemar en cuisine, d'accord, mais Benjamin n'a rien à se reprocher...ni la vaisselle dans la douche, ni les couvercles de poêles en guise d'assiettes ! Jongleur des expressions et des mots, avec lui rien ne sert de monter les petits plats sur nos grands chevaux ! Grand sensible et débordant d'humour, il retrouvera vite son sérieux lorsqu'il faudra philosopher sur <sujet bateau>. Amoureux des navions on se demanderait presque s' il n'essaie pas de les imiter à la batterie à 7h du mat' pour réveiller l'administration. `,
                 `Inarrêtable, Thomas est un joyeux luron qui n’hésite pas à se mettre dans d’étranges situations pour ses courts-métrages. Ajoutez à cela quelques gouttes (comprendre “litres”) d’alcool, et vous êtes partis pour plus d’un fou rire. Aussi à l’aise avec une bière qu’avec une caméra à la main, il possède également une surprenante tendance à s’aligner sur le repère orthonormé, avec une nette préférence pour l’axe des abscisses. Si vous deviez ne retenir qu’une phrase résumant son investissement irréprochable dans chaque tâche qu’il entreprend ce serait : “Le CLAP staffe SOBRE !” (ce qu'il respecte évidemment)`,
                 `De sang brésilien, Luiz a dû troquer le soleil de Rio pour celui de Lille (qui a dit qu'... bref). Amateur de bonne musique, il met à profit son sens du rythme pour nous interpréter à la perfection le thème de la wii (en boucle). Informateur impassible, ses conseils peuvent se révéler indispensables comme lorsqu’il propose de recruter un bébé pour rentrer dans un costume de chouette. Amoureux de son lit, se séparera-t-il un jour de son oreiller ? Jamais ! `,
                 `Si elle supporte sans aucun mal la nourriture fortement épicée, Eva n’est au fond que douceur et tendresse pour son entourage. Discrètement munie de son appareil photo, elle sait capturer les meilleurs dossiers de ses camarades listeux, alimentant ainsi notre drive “Team building Lolilol” de ses plus belles pièces. Sa deuxième corde artistique appartient au domaine musical : ses goûts prononcés (en particulier en ce qui concerne Jay Chou) et son originalité sont deux ingrédients clés pour une soirée réussie. Si elle peut surprendre en  s’investissant en torcho, Eva sait avant tout garder son sang froid et demeurer impassible devant l’épreuve “vivre au-dessus du DF”. `,
                 `Sirine est une rose. De ses (futures) racines italiennes, à ses piques, plus acérés les uns que les autres.
Professionnelle du tacle sur et en dehors du terrain, elle tire plus vite que son ombre vers le but (même en défense) et sur ses prochains. Si elle a fait éclore l’idée du trombinodoss, c'est aussi par son humour (quelquefois) graveleux qu’elle se démarque.
Amoureuse catégorique de la langue française, vous ne la surclasserez ni en culture littéraire, ni en rédaction et encore moins à la dictée.`],
    
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
