<template>
	<div>
		<table v-if = 'hasResult' class="table table-bordered" >
			<thead>
				<th v-for = 'colName in tableData.colNames' v-bind:key = 'colName'>{{colName}}</th>
			</thead>
			<tbody>
				<tr v-for = '(line,index) in tableData.data'  v-bind:key = 'index'>
				    <td v-for = '(cell,cnum) in line'  v-bind:key = 'cell+cnum'>
						{{cell}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		name:'QueryResultTable',
		data(){
			return{

			}
		},
		computed: mapState({
			hasResult: state => state.raQuery.hasResult,
		    tableData: state => state.raQuery.resultData,
		  })
	}
</script>

