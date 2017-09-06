// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import './assets/reset.scss'


Vue.config.productionTip = false
Vue.component('Jack', {
  template: "<p>I am {{name}}</p>",
  data(){
    return{
      name: 'Jack Ma'
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
