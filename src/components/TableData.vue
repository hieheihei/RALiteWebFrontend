<template>
	<div>
		<template  v-if='show'>
			<table class="table table-bordered">
				<thead>
					<th v-for='(colName,index) in table.colNames' v-bind:key='colName'>
						{{colName}}
						<span v-if="colType">
							{{table.colTypes[index]}}
						</span>
						
					</th>
				</thead>
				<tbody>
					<tr v-for='(line,index) in table.data' v-bind:key='index'>
						<td v-for='(cell,cnum) in line' v-bind:key='cell+cnum'>
							{{cell}}
						</td>
					</tr>
				</tbody>
			</table>
		</template>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'TableData',
		props:{
			tableName:String,
			show:Boolean,
			type:String,	//table,byteCode,queryPlan
			colType:Boolean
		},
		data() {
			return {
				table: {
					colNames: [],
					colTypes: [],
					data: [
						[]
					]
				}
			}
		},
		computed:{
			query () {
			      return this.$store.state.raQuery.query;
			    }
		},
		watch:{
			query(newValue){
				if(this.type=='byteCode'){
					this.getTableData('explain '+newValue);
				} else if(this.type=='queryPlan'){
					this.getTableData('explain query plan '+newValue);
				}
			}
		},
		mounted:function(){
			if(this.type=='table'){
				this.getTableData(this.tableName);
			}
		},
		methods: {
			getTableData(query){
				axios.put('http://localhost:1316/raQuery', {
						query: query
					})
					.then((response) => {
						console.log(response.data);
						this.table = response.data.model.resultData;
					})
					.catch((error) => {
						console.log(error);
					});
			}
		}
	}
</script>
