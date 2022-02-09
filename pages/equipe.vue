<template>
    <div class="myTable">
        <v-row no-gutters>
          <v-col 
          v-for="n in 21"
          :key="n"
          :cols="12"
          class="d-flex child-flex"
          >
            <Person/>
            <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
            </template>
          </v-col>
        </v-row>
      <footer>
      </footer>
    </div>

</template>

<script>

export default ({

  computed: {
    numCols: function () {
      if (this.$vuetify.breakpoint.mobile){
        return 8
      }
      return 4
    },
    tableClass: function () {
      if (this.$vuetify.breakpoint.mobile){
        return 8
      }
      return 4
    }
  }
})
</script>


<style scoped>
.myTable {
  height: 82vh;
  /* width: 78.8vw; */
  overflow-y: auto; 
  overflow-x: hidden;
  /* margin-left: -8vw;
  margin-top: 5vh; */
}

.myTable::-webkit-scrollbar {

  background-color: #d6dee1;
  border-radius: 10px;
  border: 2px solid transparent;
  background-clip: content-box;
}
.myTable::-webkit-scrollbar-thumb:hover {
  background-color: #a8bbbf;
}
</style>
