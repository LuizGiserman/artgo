<template>
    <div class="img-with-text">
      <v-img
        contain
        :src="src"
        max-height="35vh"
        max-width="26.25vw"
        aspect-ratio="1"
      ></v-img>
      <h2> 
        {{ name }}
      </h2>
      <p> 
        {{ text }}
      </p>
    </div>
</template>

<style>
.img-with-text {
  text-align: center;
  max-width: 26.25vw;
}
</style>

<script>
export default {

    props: 
    {
        name: {
            type: String,
            default: "Luiz"
        },
        src: {
            type: String,
            default: "/Luiz.jpeg"
        },
        text: {
            type: String,
            default: "Luiz est super cool"
        }  
    }


}
</script>