<template>
  <v-app>

    <v-navigation-drawer fixed  v-model="sideNav">
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon >supervisor_account</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>View Meetups</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar class="purple darkent-3" dark>
        <v-toolbar-side-icon class="hidden-sm-and-up"
         @click.native.stop = "sideNav = !sideNav "></v-toolbar-side-icon>
        <v-toolbar-title>DevMeetup</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn flat>
            <v-icon left dark>supervisor_account</v-icon>
            View Meetups
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <main>
      
      </main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      sideNav: false
    }
  }
}
</script>
