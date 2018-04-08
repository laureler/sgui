<template>
    <div class="module-page">
      <div class="title">
        <div class="back" onclick="window.history.go(-1)">返回</div>
        <p class="name">多行文本省略</p>
      </div>
      <div class="wrap">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="组件演示" name="1">
            多行文本省略：
            <multi-line></multi-line>
          </el-collapse-item>
          <el-collapse-item title="使用说明" name="2">
            <p> :uiSrc 为生成二维码的地址 默认为 http://qr.liantu.com/api.php?text=</p>
            <p> :params 为生成二维码所传入参数 默认为空</p>

          </el-collapse-item>

        </el-collapse>
      </div>
    </div>
</template>
<script>
  import multiLine from '../../components/multiLine.vue'
  export default {
    components:{multiLine},
    data(){
      return{
        activeNames:''
      }
    },
    methods:{
      handleChange(){

      }
    }
  }
</script>
<style>
</style>
