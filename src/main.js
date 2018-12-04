import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert'
import EditMeetupDetailsDialog from './components/Meetup/Edit/EditMeetupDetailsDialog'
import EditMeetupDateDialog from './components/Meetup/Edit/EditMeetupDateDialog'
import EditMeetupTimeDialog from './components/Meetup/Edit/EditMeetupTimeDialog'
import RegisterDialog from './components/Meetup/Registration/RegisterDialog'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)
Vue.component('app-edit-meetup-details-dialog', EditMeetupDetailsDialog)
Vue.component('app-edit-meetup-date-dialog', EditMeetupDateDialog)
Vue.component('app-edit-meetup-time-dialog', EditMeetupTimeDialog)
Vue.component('app-meetup-register-dialog', RegisterDialog)



new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9JOvH6MedDD9xD0BCD0y04Jj-tcBlTn0',
      authDomain: 'mymeetup-ea677.firebaseapp.com',
      databaseURL: 'https://mymeetup-ea677.firebaseio.com',
      projectId: 'mymeetup-ea677',
      storageBucket: 'gs://mymeetup-ea677.appspot.com',
    })
    //cek apakah session user atau tidak
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    //load data meetups
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
