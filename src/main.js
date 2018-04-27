// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from  'fastclick'
import store from './vuex'
FastClick.attach(document.body);



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
