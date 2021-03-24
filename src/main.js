import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Import Froala Editor 
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import VueFroala from 'vue-froala-wysiwyg'

Vue.use(VueFroala)


const axios = require('axios');
const axiosInstance = axios.create({
  // baseURL: 'http://localhost:1316/'
  baseURL: 'http://172.20.168.38:1316'
});
Vue.prototype.axiosInstance = axiosInstance;


Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
