<template>
  <v-app>

    <v-navigation-drawer temporary fixed  v-model="sideNav">
        <v-list>
          <v-list-tile v-for="item in menuItems"
               :key="item.title"
               :to="item.link">
            <v-list-tile-action>
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar class="deep-purple accent-4" dark>
        <v-toolbar-side-icon class="hidden-sm-and-up"
         @click.native.stop = "sideNav = !sideNav "></v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat v-for="item in menuItems" 
            :to="item.link"
            :key="item.title">
            <v-icon left dark>{{ item.icon }}</v-icon>
            {{ item.title }}
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
  data() {
    return {
      sideNav: false,
      menuItems: [
        { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups' },
        { icon: 'room', title: 'Organize Meetup', link: '/meetup/new' },
        { icon: 'person', title: 'Profile', link: '/profile' },
        { icon: 'face', title: 'Sign up', link: '/signup' },
        { icon: 'lock_open', title: 'Sign in', link: '/signin' },
      ]
    }
  }
}
</script>
