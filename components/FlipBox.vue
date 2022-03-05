<template>
  <div>
    <v-card
        class="mx-auto"
        max-width="344"
        style="background: #EAB824"
    >
        <v-img
        :src="src"
        ></v-img>

        <v-card-title style="color: black;
                                            font-family: 'Comfortaa', cursive;
                                            text-decoration: none;
                                            font-size: larger;">

            {{ name }}

        </v-card-title>

        <v-card-subtitle style="color: black;
                                            font-family: 'Comfortaa', cursive;
                                            text-decoration: none;">
            {{ text }}
        </v-card-subtitle>

        <v-card-actions>
        <v-btn
            color="black"
            text
            style="font-family: 'Comfortaa', cursive;"
            @click="show = !show"
        >
            Afficher Bio
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
            color="#754115"
        >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
        </v-card-actions>

        <v-expand-transition>
        <div v-show="show">
            <v-divider></v-divider>

            <v-card-text style="color: black;
                                            font-family: 'Comfortaa', cursive;
                                            text-decoration: none;">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
        </div>
        </v-expand-transition>
    </v-card>
    <vspacer/>
    <vspacer/>

  </div>
</template>

<script>
  export default {
    data: () => ({
      show: false,
    }),
    props: {
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
            default: "Luiz est une persone"
        }  
    },
  }
</script>

<style>
</style>