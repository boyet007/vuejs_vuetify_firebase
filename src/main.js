import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from '@/router'
import { store } from './store'
import DateFilter from './filters/date'
import * as firebase from 'firebase'
import AlertCmp from './components/Shared/Alert'

import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertCmp)

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
      storageBucket: 'mymeetup-ea677.appspot.com',
    })

    //load data meetups
    this.$store.dispatch('loadMeetups')
  }
}).$mount('#app')
