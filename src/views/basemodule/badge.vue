<template>
  <div class="module-page">
    <div class="title">
      <div class="back" onclick="window.history.go(-1)">返回</div>
      <p class="name">badge标记</p>
    </div>
    <div class="wrap">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="组件演示" name="1">
          <div class="mt-25">
            <label class="left-label">基础用法:</label>
            <badge count="3">
              <a href="#" class="demo-badge"></a>
            </badge>
          </div>
          <div class="mt-25">
            <label class="left-label">红点:</label>
            <badge dot count="10">
              <a href="#" >我是一个链接</a>
            </badge>
          </div>
          <div class="mt-25">
            <label class="left-label">封顶数字:</label>
            <badge  count="100">
              <a href="#" class="demo-badge"></a>
            </badge>
          </div>
          <div class="mt-25 mb-20">
            <label class="left-label">单独使用:</label>
            <badge count="10"></badge>
            <badge count="20" class-name="demo-badge-alone"></badge>
          </div>
        </el-collapse-item>
        <el-collapse-item title="使用说明" name="2">
          示例代码：
          <div class="code">
            基础用法： {{code1}}

          </div>
          <div class="code">
            红点：  {{code2}}
          </div>
          <div class="code">
            封底数字：  {{code3}}
          </div>
          <div class="code">
            单独使用：  {{code4}}
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
                  <td>显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏</td>
                  <td>Number | String</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>overflow-count</td>
                  <td>展示封顶的数字值</td>
                  <td>Number | String</td>
                  <td>99</td>
                </tr>
                <tr>
                  <td>dot</td>
                  <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0</td>
                  <td>Boolean</td>
                  <td>false</td>
                </tr>
                <tr>
                  <td>class-name</td>
                  <td>自定义的class名称，dot 模式下无效</td>
                  <td>String</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>
<script>
  import badge from '../../components/badge.vue'
  export default {
    components:{badge},
    data(){
      return{
        activeNames:['1','2','3'],
        code1:`<badge count="3">
              <a href="#" class="demo-badge"></a>
            </badge>`,
        code2:`<badge dot count="10">
              <a href="#" >我是一个链接</a>
            </badge>`,
        code3:`<badge  count="100">
              <a href="#" class="demo-badge"></a>
            </badge>`,
        code4:`<badge count="10"></badge>
            <badge count="20" class-name="demo-badge-alone"></badge>`
      }
    },
    methods:{
      handleChange(val){
        console.log(val);
      },
    },
  }
</script>
<style >
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
  .demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
  .demo-badge-alone{
     background: #5cb85c!important;
   }


</style>
