<template>
  <div id="app">
      <div class="container">
          <div class="row">
            <home-top></home-top>
          </div>
           <div class="row">
            <div class="col-md-4">
              <home-left></home-left>
            </div>
            <div class="col-md-8">
              <editor></editor>
            </div>
          </div>
           <div class="row">
              <home-footer></home-footer>
          </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
import HomeFooter from './components/common/HomeFooter.vue'
import HomeLeft from './components/common/HomeLeft.vue'
import HomeTop from './components/common/HomeTop.vue'
import Editor from './components/Editor.vue'

export default {
  name:"RALiteWeb",
  components:{
    HomeTop,
    HomeFooter,
    HomeLeft,
    Editor
  }
}
</script>
