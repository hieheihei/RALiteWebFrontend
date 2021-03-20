<template>
	<div>
		<ul class="nav nav-pills nav-stacked">
			<li role="presentation" v-for="(tableName,index) in tableNames" v-bind:key='tableName'>
				<div class="panel panel-default">
					<div class="panel-heading" v-on:click="changeTableToshow(index)">
						{{tableName}}
					</div>
					<table-data v-bind:tableName='tableName' v-bind:show='tableShowFlags[index]' type='table'></table-data>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
	import axios from 'axios'
	import TableData from './TableData.vue'

	export default {
		name: 'TableList',
		components:{
			TableData
		},
		data() {
			return {
				tableNames:[],
				tableShowFlags:[]
			}
		},
		methods: {
			getTableNames(){
				axios.get('http://localhost:1316/dataService/tables')
					.then((response) => {
						this.tableNames = response.data.model;
						this.tableShowFlags = new Array(this.tableNames.length).fill(false);
					})
					.catch((error) => {
						console.log(error);
					});
			},
			changeTableToshow(index){
				this.$set(this.tableShowFlags,index,!this.tableShowFlags[index]);
			}
		},
		created: function() {
			this.getTableNames();
		}
	}
</script>
