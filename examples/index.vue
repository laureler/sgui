<template>
  <div>
  <header class="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
    <a class="title">SGUI组件库</a>
  </header>
  <div class="container-fluid">
    <div class="row flex-xl-nowrap">
      <div class="col-12 col-md-4 col-xl-2 bd-sidebar">
        <sg-menu></sg-menu>
      </div>
      <main class="col-12 col-md-8 col-xl-10">
        <router-view></router-view>
      </main>
    </div>
  </div>
  </div>
</template>
<script>
  import SgMenu from './components/menu'
  export default {
    components:{SgMenu}
  }
</script>
<style lang="less" scoped>
  header{
    background-color: #2d8cf0;
    .title{
      font-size: 22px;
      color:#fff;
    }
  }
</style>
