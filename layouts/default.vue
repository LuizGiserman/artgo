<template>
  <v-app class="custom-background">
    <v-navigation-drawer v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      height="100vh"
      color="#ce9c38"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="#EAB824"
      height="100%"
    >
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile" @click.stop="drawer = !drawer" />
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-spacer />

        <router-link to=/>
          <v-img
            contain
            src=/artifices_horloge_jaune.png
            max-height="90"
            max-width="90"
            vertical-align="middle"
          ></v-img>
        </router-link>


        <p class="myLinkLogo">
            Art'gonautes
        </p>
        <!-- <p class="slogan">
          Slogan
        </p> -->
      <v-spacer />

      <template v-if="!$vuetify.breakpoint.mobile">
        <router-link to=/events style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Events
        </router-link>
          <v-spacer />
        <router-link to=/trombi style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Trombi
        </router-link>
          <v-spacer />
        <router-link to=/programme style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Programme
        </router-link>
          <v-spacer />
        <router-link to=/partenaires style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Partenaires
        </router-link>
          <v-spacer />
        <router-link to=/jeu-de-piste style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Jeu de Piste
        </router-link>
          <v-spacer />
      </template>
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar >
    <v-spacer />

    <v-main >
      <v-container >
        <Nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<style scoped>



nav myLink.hover{
  text-decoration: underline;
}

p { display: block;}

.myLink{
    color: black;
    font-family: 'Comfortaa', cursive;
    text-decoration: none;
    font-size: larger;
    vertical-align: middle;

}

#app {
  background: url('/fond.png')
    no-repeat center center fixed !important;
  background-size: cover;
}


.myLinkLogo{
    color: black;
    font-family: 'bdaargos';
    text-decoration: none;
    font-size: 300%;
    margin-left: 1%;
    vertical-align: center;
}

.slogan{
    color: black;
    font-family: 'Comfortaa';
    text-decoration: none;
    font-size: larger;
    margin-left: 1%;
    vertical-align: center;
}

</style>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Bienvenue',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Events',
          to: '/events'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Trombi',
          to: '/trombi'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Art'gonautes"
    }
  }
}
</script>
