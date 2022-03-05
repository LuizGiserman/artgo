<template>

<div>

  <v-card
    class="mx-auto"
    style="background: #FEEDCF;">
    <h1 class="text-center text-md-h2 text-h5">
            Liste BDA Centrale Lille 2022 - 2023
    </h1>
  </v-card>



  <div class="containerAnimate">
    <v-img
          style="
            position: absolute;
          "
          contain
          src="/equipe.jpg"
          >
    </v-img>
  </div>

  <div class="container">

    <iframe class="forVideo" width="1080" height="720" src="https://www.youtube.com/embed/LNIPk4fMsl8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    

  </div>

  <div class="containerCarouseel">
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
  height: 60vh;
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
            src: '/amelie_art.JPG',
          },
          {
            src: '/benji_art.jpg',
          },
          {
            src: '/jean_art.jpeg',
          },
          {
            src: '/jing_art.jpg',
          },
        ],
      }
    },
  }
</script>
