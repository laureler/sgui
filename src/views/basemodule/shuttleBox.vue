<template>
  <div class="module-page">
    <div class="title">
      <div class="back" onclick="window.history.go(-1)">返回</div>
      <p class="name">穿梭框</p>
    </div>
    <div class="wrap">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="组件演示" name="1">

        </el-collapse-item>
        <el-collapse-item title="使用说明" name="2">
          示例代码：  uiScript.multiOverflowhidden(id,rows,text);
          参数类型：  id为指定多行省略的id或类名，rows指定第几行省略，text为文本内容
        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        activeNames:['1','2'],
      }
    },
    methods:{
      handleChange(val){
        console.log(val);
      },
    },
  }
</script>
<style>
</style>
