import Vue from 'vue'
import App from './App.vue'
import Oruga from '@oruga-ui/oruga';

Vue.config.productionTip = false

Vue.use(Oruga);

new Vue({
  render: h => h(App),
}).$mount('#app')
