import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/styles.scss';
import VueBootstrap from 'bootstrap-vue'
import VueMoment from 'vue-moment';

Vue.use(VueBootstrap);
Vue.use(VueMoment);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
