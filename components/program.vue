<template>
    <v-card
            :min-width="maxwidth"
            class="mx-auto"
            style="background: #754115;"
    >

    <div style="background-color: #ece5cd;">
        <v-card-text>
            <ul>
                <li v-for="item in items"
                    :key="item"
                    class="text-md-body-1 text-sm-body-1">
                    {{ item }}
                </li>
            </ul>

        </v-card-text>
    </div>

    <v-card-title class="justify-center text-sm-h4 text-md-h5">
        {{ title }}
    </v-card-title>    

    </v-card>
</template>

<style scoped>
.texto{
    color: black;
    font-family: 'Comfortaa', cursive;

}

.text-md-h5, .text-sm-body-1{
    color:black;
}

.text-md-h3{
    color: #e6b745;
    font-family: 'bdaargos';
}

.text-sm-h4{
    color: #e6b745;
    font-family: 'bdaargos';
}

</style>

<script>
export default {
    props: {
            items: {
                type: Array,
                default: () => ["Topic 1", "Topic 2"]
            }, 
            title: {
                type: String,
                default: "Titre" 
            },
            maxwidth:{
                type: String,
                default: "40%"
            }
        },
}
</script>