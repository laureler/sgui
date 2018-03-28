<template>
  <div id="app">
  	<v-header></v-header>
    <router-view/>
  </div>
</template>

<script>
import vHeader from './components/header'
export default {
  name: 'App',
  components:{
  	vHeader
  }
}
</script>

<style lang='less'>
@import './assets/css/main.less';
</style>
