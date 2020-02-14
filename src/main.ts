import Vue from "vue";
import App from "./App.vue";
import Vuetify from 'vuetify';
import store from "./store";
import router from "./router";

Vue.use(Vuetify)

new Vue({
  el: "#root",
  render: h => h(App),
  store: store,
  router: router
});
