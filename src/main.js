import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import { store } from './store'
import * as firebase from 'firebase'
import DateFilter from './filters/date'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)


new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCD5JbedulPdKRiZnW7XakZynuODZugxuw',
      authDomain: 'meetup-vuetify-620f3.firebaseapp.com',
      databaseURL: 'https://meetup-vuetify-620f3.firebaseio.com',
      projectId: 'meetup-vuetify-620f3',
      storageBucket: 'meetup-vuetify-620f3.appspot.com',
    })
  }
}).$mount('#app')
