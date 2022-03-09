<template>

<div>

  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h2 text-h6">
          {{ $t('titlePhotoEquipe') }} {{ $vuetify.breakpoint.name }}
    </h1>
  </v-card>



  <div class="containerAnimate mx-n3 mx-lg-auto" :style=imageHeight>
    <v-img
          style="
            position: absolute;
          "
          contain
          src="/equipe.jpg"
          >
    </v-img>
  </div>

  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h2 text-h6">
        {{ $t('titleFilm') }}
    </h1>
  </v-card>

  <div class="container">
    <iframe :width="videoSettings.width" :height="videoSettings.height" src="https://www.youtube.com/embed/Xoq9LWI2A1Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h2 text-h6">
            {{ $t('titleCaroussel') }}
    </h1>
  </v-card>

  <div style="height: 65vh;">
    <v-card >
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              contain
            >
            </v-carousel-item>
          </v-carousel>
    </v-card>
  </div>



</div>





</template>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.text-md-h2, .text-h4{
    font-family: 'Comfortaa', cursive;

}
.containerAnimate{
  height: 60vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-bottom: 20%;
}
.container{
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-bottom: 20%;
}

.containerCarouseel{
  height: 52vh;
  position: relative;
  overflow: hidden; 
  display: flex;
}

.lisette{
  height: 60vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-bottom: 2%;
}

h1 {

  color: black;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;
  font-size: 400%;
  margin-bottom: 2%;
  margin-left: 1%;
  
}

.forVideo{
  position:absolute;
  width: 100%;
  height: 100%; 
}
</style>


<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
    mounted: function (){
      if (this.imageHeight == ""){
        this.startAnimations();
      }
    },
    methods:{
      startAnimations: function(){
        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".containerAnimate", {
          scrollTrigger: {
            trigger: ".containerAnimate",
            start: "-35%",
            toggleActions: "play pause resume none",
            scrub: 1,
            pin: true
          },
          scale:1.5,
          duration: 3
        })
      }
    },
    data () {
      return {
        items: [
          {
            src: '/maelys_art.jpg'
          },
          {
            src: '/benji_art.jpg',
          },
          {
            src: '/romain_art.jpg'
          },
          {
            src: '/amelie_art.JPG',
          },
          {
            src: '/max_art.jpeg',
          },
          {
            src: '/jing_art.jpg',
          },
          {
            src: '/baptiste_art.jpg',
          },
          {
            src: '/jean_art.jpeg',
          },
          {
            src: '/maud_art.png',
          },
        ],
      }
    },
    computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "min-width: 100vw;  height:25vh;"
          case 'sm': return "min-width: 100vw;  height:45vh;"
          case 'md': return "height: 75vh;"
          case 'lg': return "height: 75vh;"
          case 'xl': return "height: 75vh;"
        }
      },
      videoSettings () {
        let width, height
          switch (this.$vuetify.breakpoint.name) {
          case 'xs': width = 560;  height = 315; break;
          case 'sm': width = 560;  height = 315; break;
          case 'md': width = 1300; height = 731.25; break;
          case 'lg': width = 1300; height = 731.25; break;
          case 'xl': width = 1300; height = 731.25; break;
      }
          return {'width': width, 'height': height}
    },
  }
}
</script>
