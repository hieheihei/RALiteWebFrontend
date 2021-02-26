<template>
	<div>
		<table v-if = 'hasResult' class="table table-bordered" >
			<thead>
				<th v-for = 'colName in tableData.colNames' v-bind:key = 'colName'>{{colName}}</th>
			</thead>
			<tbody>
				<tr v-for = 'line in tableData.data'  v-bind:key = 'line'>
				    <td v-for = 'cell in line'  v-bind:key = 'cell'>
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
		name:'RATable',
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

