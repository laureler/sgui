<template>
  <div>
    <sg-header v-if="isIndex"></sg-header>
    <div :class="contiainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import SgHeader from './components/header'

  export default {
    name: 'App',
    components: {SgHeader},
    computed: {
      isIndex() {
        return this.$route.path !== '/'
      },
      contiainer(){
        if(this.isIndex){
          return 'contiainer'
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../src/styles/index.less";
</style>
<style lang="less" scoped>
  .contiainer {
    padding: 85px 15px 50px 15px;
  }
</style>


