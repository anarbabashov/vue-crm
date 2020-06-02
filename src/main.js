import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyAlQ4ncBfRf0IyQkfNHHMmGFvggGoVX5XI",
  authDomain: "vue-crm-335a9.firebaseapp.com",
  databaseURL: "https://vue-crm-335a9.firebaseio.com",
  projectId: "vue-crm-335a9",
  storageBucket: "vue-crm-335a9.appspot.com",
  messagingSenderId: "1072033480245",
  appId: "1:1072033480245:web:67f620a22f037c807bfb7c"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
