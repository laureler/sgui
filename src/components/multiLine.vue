<template>
    <div class="block" style="display:inline-block">{{text}}
    </div>
</template>
<script>
  export default {
    name:'multiLine',
    data(){
      return {

      }
    },
    props:['text'],
  }
</script>
<style scoped>
  .block{
    width:100%;
    overflow: hidden;
    line-height:1.7;
  }
</style>
