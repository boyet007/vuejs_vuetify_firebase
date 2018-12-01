<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav" fixed>
      <v-list>
        <v-list-tile v-for="item in menuItems"
          router :to="item.link"
         :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile @click="onLogout" v-if="userIsAuthenticated">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
        <v-list-tile-content>Logout</v-list-tile-content>  
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="cyan darken-3">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in menuItems"
          router :to="item.link"
         :key="item.title">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title}}</v-btn>
          <v-btn @click="onLogout" flat v-if="userIsAuthenticated">
            <v-icon left>exit_to_app</v-icon>
            Logout
          </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>   
    </main>
  </v-app>
</template>
<script>

export default {
  data () {
    return {
      sideNav: false,
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' }
      ]
      if(this.userIsAuthenticated) {
        menuItems = [
            { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
            { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
            { icon: 'person', title: 'Profile', link: '/profile' },
          ]
        }
        return menuItems
      },
      userIsAuthenticated() {
        return this.$store.getters.user !== null && this.$store.getters.user != undefined
      }
    },
    methods: {
      onLogout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>
  @import './styles/style.css'
</style>

