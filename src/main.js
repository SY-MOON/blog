// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import axios from 'axios'
import firebase from 'firebase'


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAellMDK7iueYuvQop1bwv1Aq85HJPRTEM",
  authDomain: "sy-blog-29489.firebaseapp.com",
  databaseURL: "https://sy-blog-29489.firebaseio.com",
  projectId: "sy-blog-29489",
  storageBucket: "sy-blog-29489.appspot.com",
  messagingSenderId: "259806573909"
};
firebase.initializeApp(firebaseConfig);


Vue.prototype.$EventBus = new Vue()
Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi',
  icons: {
    'menu': 'dehaze'
  }
})


/* eslint-disable no-new */
new Vue({
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')
