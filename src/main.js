import Vue from 'vue'
import App from './App.vue'
import router from './router'

//Import Froala Editor 
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/third_party/embedly.min';
import 'froala-editor/js/third_party/font_awesome.min';
import 'froala-editor/js/third_party/spell_checker.min';
import 'froala-editor/js/third_party/image_tui.min';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import VueFroala from 'vue-froala-wysiwyg'

import Vuex from 'vuex'

Vue.use(VueFroala)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
	raQuery: {
		query:"",
		hasExecuted:false,
		hasResult:false,
		resultData:{
			colNames:[],
			data:[]
		}
	}
  },
  mutations: {
	raQuery(state,q){
		state.raQuery = q;
	}
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
