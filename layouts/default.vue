<template>
  <v-app class="custom-background">
    <v-navigation-drawer v-if="$vuetify.breakpoint.mobile"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      height="100vh"
      width="55%"
      color="#ce9c38"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="localePath(item.to)"
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
      <v-spacer v-if="$vuetify.breakpoint.name != 'xs' 
                    ||$vuetify.breakpoint.name != 'sm' ">
      </v-spacer>

        <router-link to=/>
          <v-img
            contain
            src=/artifices_horloge_jaune.png
            :max-height="logoSize"
            :max-width="logoSize"
            vertical-align="middle"
          ></v-img>
        </router-link>


        <p class="myLinkLogo" :style="titleFontSize">
            Art'gonautes
        </p>
        <!-- <p class="slogan">
          Slogan
        </p> -->
      <v-spacer />

      <template v-if="!$vuetify.breakpoint.mobile">
        <router-link :to="localePath('events')" style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            Events
        </router-link>
          <v-spacer />
        <router-link :to="localePath('trombi')" style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            {{ $t('trombi') }}
        </router-link>
          <v-spacer />
        <router-link :to="localePath('programme')" style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            {{ $t('Programme') }}
        </router-link>
          <v-spacer />
        <router-link :to="localePath('partenaires')" style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            {{ $t('Partenaires') }}
        </router-link>
          <v-spacer />
        <router-link :to="localePath('jeu-de-piste')" style=" color: black;
                                        font-family: 'Comfortaa', cursive;
                                        text-decoration: none;
                                        font-size: larger;
                                        vertical-align: middle;
                                      ">
            {{ $t('Jeu de Piste') }}
        </router-link>
      </template>
          <v-spacer />
          
          <!-- <v-icon style="color: black; margin-right: 1%">
            mdi-arrow-down
          </v-icon> -->
          <v-select
          v-model="$i18n.locale"
          :items="languages"
          :label="$i18n.locale.code"
          return-object
          single-line
          dense
          outlined
          :style="styleSelect"
          class="ml-2 mt-3 mt-md-6"
          ></v-select>

          <v-spacer/>
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

.v-select__selection,
.v-select__selection--comma,
.v-select.v-text-field input {
  color: black !important;
}

nav myLink.hover{
  text-decoration: underline;
}

p { display: block;
    font-family: 'bdaargos';
}

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
  computed: {
    styleSelect (){
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "width: 22%";
          case 'sm': return "width: 22%";
          case 'md': return "width: 3%";
          case 'lg': return "width: 3%";
          case 'xl': return "width: 3%";
        }

    },
    logoSize() {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 70;
          case 'sm': return 70;
          case 'md': return 90;
          case 'lg': return 90;
          case 'xl': return 90;
        }
    },
    titleFontSize () {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return "font-size: 200%"
          case 'sm': return "font-size: 200%"
          case 'md': return "font-size: 300%"
          case 'lg': return "font-size: 300%"
          case 'xl': return "font-size: 300%"
        }
    },
    languages () {
      let size = this.$i18n.locales.length;
      let langs = [];
      for (let i= 0; i < size; i++){
        langs.push(this.$i18n.locales[i].code)
      }

      return langs;
    }
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-calendar',
          title: 'Events',
          to: 'events'
        },
        {
          icon: 'mdi-account-multiple',
          title: 'Trombi',
          to: 'trombi'
        },
        {
          icon: 'mdi-presentation',
          title: 'Programme',
          to: 'programme'
        },
        {
          icon: 'mdi-contacts',
          title: 'Partenaires',
          to: 'partenaires'
        },
        {
          icon: 'mdi-puzzle',
          title: 'Jeu de Piste',
          to: 'jeu-de-piste'
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
