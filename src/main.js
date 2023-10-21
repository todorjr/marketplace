import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBBG9Ala_mSG-uiKlLC8gd_YNn5MyxRLFI',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

new Vue({
  render: h => h(App),
}).$mount('#app')


