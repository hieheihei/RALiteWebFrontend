<template>
	<div>
		RALite HomeRight
		<h4>query plan</h4>
		<table-data v-bind:show='true' type='queryPlan'></table-data>
		<h4>byte code</h4>
		<table-data v-bind:show='true' type='byteCode'></table-data>
	</div>
</template>


<script>
	import TableData from '../TableData.vue'
	
	export default {
		name:'HomeRight',
		components:{
			TableData
		}
	}
</script>