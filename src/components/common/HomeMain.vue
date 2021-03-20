<template>
    <div>
		<div class="row">
			RALite HomeMain
		</div>
        <div class="row">
			<editor></editor>
		</div>
		<div class="row">
			<query-result-table></query-result-table>
		</div>
    </div>
</template>


<script>
	import Editor from '../Editor.vue'
	import QueryResultTable from '../QueryResultTable.vue'
	
	export default {
		name:"HomeMain",
		components:{
			Editor,
			QueryResultTable
		}
	}
</script>