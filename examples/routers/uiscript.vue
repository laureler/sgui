<template>
  <div style="height: 100%;overflow: auto;">
    <iframe src="http://192.168.10.9:3001/uiscript/readMe.html" frameborder="0"></iframe>
  </div>
</template>

<script>
  import IArticle from '../components/article'

  export default {
    name: "uiscript",
    components: {IArticle}
  }
</script>

<style scoped lang="less">
iframe{
  display: block;
  width: 100%;
  height: 100%;
}
</style>
