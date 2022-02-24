<template>
  <!-- <v-container
  fill-height
  fill-width>

    <v-row
    align="center"
    justify="center">
      <v-col>
        <h1 class="text-center">
          Liste BDA Centrale Lille 2022 - 2023
        </h1>
      </v-col>
    </v-row>

    <v-row
    align="center"
    style="position: relative;">
      <v-col
      justify="center"
      style="position: absolute;
             top: 50%">
        <v-img
        contain
        src="/prato.jpg"
        width="720"
        height="480"
        >
        </v-img>
      </v-col>

    </v-row>

    <v-row
    align="center"
    style="position: relative;">
      <v-col
      allign="center"
      justify="center">

        <v-btn elevation="2"
              x-large
              style="background: #EAB824;
                     color: black;
                     font-family: 'Comfortaa', cursive;
                     allign: center;">
          Continue
        </v-btn>
      </v-col>
    </v-row>

    <v-row
    align="center"
    style="position: relative;">
      <v-col
      justify="center"
      style="position: absolute;
             top: 50%">
        <iframe width="1080" height="720" src="https://www.youtube.com/embed/LNIPk4fMsl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
      </v-col>
    </v-row>

    <v-row
    align="center"
    style="position: relative;">
      <v-col
      allign="center"
      justify="center">

        <v-btn elevation="2"
              x-large
              style="background: #EAB824;
                     color: black;
                     font-family: 'Comfortaa', cursive;
                     allign: center;">
          Continue
        </v-btn>
      </v-col>
    </v-row>


    <v-row
    align="center"
    style="position: relative;">
      <v-col
      justify="center"
      style="position: absolute;
             top: 50%">
        <v-card width="1080">
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>

  </v-container> -->

<div>

  <h1 class="text-center">
          Liste BDA Centrale Lille 2022 - 2023
  </h1>



  <div class="containerAnimate">
    <v-img
          style="
            position: absolute;
          "
          contain
          src="/prato.jpg"
          >
    </v-img>
  </div>

  <!-- 
    <v-btn elevation="2"
                x-large
                style="background: #EAB824;
                      color: black;
                      font-family: 'Comfortaa', cursive;
                      allign: center;">
            Continue
    </v-btn> -->
  <div class="container">

    <iframe class="forVideo" width="1080" height="720" src="https://www.youtube.com/embed/LNIPk4fMsl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    

  </div>
<!-- 
  <div class="container">
    <v-card >
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>

  </div> -->


</div>





</template>


<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

.containerAnimate{
  height: 60vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-bottom: 20%;
}
.container{
  height: 60vh;
  position: relative;
  overflow: hidden; 
  display: flex;
  margin-bottom: 20%;
}

h1 {

  color: black;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;
  font-size: 400%;
  margin-bottom: 2%;
  
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
      this.startAnimations()
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
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
  }
</script>
