<template>
  <div class="module-page">
    <div class="title">
      <div class="back" onclick="window.history.go(-1)">返回</div>
      <p class="name">评分</p>
    </div>
    <div class="wrap">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="组件演示" name="1">
          <div class="mt-25">
            <label class="left-label">基础用法:</label>
            <rate  v-model="value"></rate>
          </div>
          <div class="mt-25">
            <label class="left-label">半星:</label>
            <rate allow-half v-model="halfValue"></rate>
          </div>
          <div class="mt-25 mb-20">
            <label class="left-label">禁用:</label>
            <rate disabled v-model="value1"></rate>
          </div>
        </el-collapse-item>
        <el-collapse-item title="使用说明" name="2">
          示例代码：
          <div class="code">
            基础用法： {{code1}}

          </div>
          <div class="code">
            半星：  {{code2}}
          </div>
          <div class="code">
            禁用：  {{code3}}
          </div>
        </el-collapse-item>
        <el-collapse-item title="API" name="3">
          <table>
            <thead>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            </thead>
            <tbody>
            <tr>
              <td>count</td>
              <td>star 总数</td>
              <td>Number</td>
              <td>5</td>
            </tr>
            <tr>
              <td>value</td>
              <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
              <td>Number</td>
              <td>0</td>
            </tr>
            <tr>
              <td>allow-half</td>
              <td>是否允许半选</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否只读，无法进行交互</td>
              <td>Boolean</td>
              <td>false</td>
            </tr>
            </tbody>
          </table>
        </el-collapse-item>
      </el-collapse>

    </div>
  </div>
</template>
<script>
  import rate from '../../components/rate.vue'
  export default {
    data(){
      return{
        activeNames:['1','2','3'],
        value:3,
        value1:2,
        halfValue:2.5,
        code1:`
          <rate v-model="value"></rate>
        `,
        code2:`
          <rate allow-half v-model="halfValue"></rate>
        `,
        code3:`
           <rate disabled v-model="value"></rate>
        `
      }
    },
    components:{rate},
    methods:{
      handleChange(val){
        console.log(val);
      },
    },
  }
</script>
<style>
  .mt-25{
    margin-top:25px;
  }
  .mb-20{
    margin-bottom:20px;
  }
  .left-label{
    padding:0 10px;
    width:80px;
    display: inline-block;
  }
  table{
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;
  }
  table th {
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
    background: #f7f7f7;
    white-space: nowrap;
    color: #5c6b77;
    font-weight: 600;
  }
  table td, table th {
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: left;
  }
  .code{
    border-radius: 3px;
    background-color:#f7f7f7;
    color: inherit;
    padding:5px 10px;

  }
</style>
