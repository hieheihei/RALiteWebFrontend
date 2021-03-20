import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	raQuery: {
  		query:"",
  		hasExecuted:false,
  		hasResult:false,
  		resultData:{
  			colNames:[],
  			colTypes:[],
  			data:[]
  		}
  	},
	tableToShow:"_null_"
  },
  getters:{

  },
  mutations: {
	raQuery(state,q){
		state.raQuery = q;
	},
	tableToShow(state,tableName){
		state.tableToShow = tableName;
	}
  },
  actions: {

  },
  modules: {
  }
})