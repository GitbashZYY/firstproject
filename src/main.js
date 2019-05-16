import 'lib-flexible/flexible.js';

import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
// Vue.prototype.axios=axios;
import VueAxios from 'vue-axios'

import router from './router/index.js'

import { Row, Col } from 'vant'

Vue.use(Row).use(Col)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false


new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
