<template>
	<div id="app">
		<div class="container">
			<div class="row">
				<home-top></home-top>
			</div>
			<div class="row">
				<div class="col-md-3">
					<home-left></home-left>
				</div>
				<div class="col-md-6">
					<home-main></home-main>
				</div>
				<div class="col-md-3">
					<home-right></home-right>
				</div>
			</div>
			<div class="row">
				<home-footer></home-footer>
			</div>
		</div>
		<router-view />
	</div>
</template>

<script>
	import HomeFooter from './components/common/HomeFooter.vue'
	import HomeLeft from './components/common/HomeLeft.vue'
	import HomeTop from './components/common/HomeTop.vue'
	import HomeMain from './components/common/HomeMain.vue'
	import HomeRight from './components/common/HomeRight.vue'

	export default {
		name: "RALiteWeb",
		components: {
			HomeTop,
			HomeFooter,
			HomeLeft,
			HomeMain,
			HomeRight
		}
	}
</script>
