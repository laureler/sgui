<template>
  <div class="module-page">
    <div class="title">
      <div class="back" onclick="window.history.go(-1)">返回</div>
      <p class="name">头像</p>
    </div>
    <div class="wrap">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="组件演示" name="1">
          <div class="mt-25">
            <label class="left-label">基础用法:</label>
            <avatar size="large"><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar size="small"><i class="ivu-icon ivu-icon-person"></i></avatar>

            <avatar size="large" shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar  shape="square" ><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar size="small"  shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
          </div>
          <div class="mt-25">
            <label class="left-label">类型:</label>
            <avatar :src=src></avatar>
            <avatar><i class="ivu-icon ivu-icon-person"></i></avatar>
          </div>
          <div class="mt-25">
            <label class="left-label">带徽标的头像:</label>
            <badge  count="1">
              <avatar shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
            </badge>
          </div>
          <div class="mt-25 mb-20">
            <label class="left-label">自动调整字符大小:</label>
            <avatar :style="{background: color}">{{ user }}</avatar>
            <button size="small" @click="handleChangeA" class="ibutton">Change</button>
          </div>
        </el-collapse-item>
        <el-collapse-item title="使用说明" name="2">
          示例代码：
          <div class="code">
            基础用法： {{code1}}

          </div>
          <div class="code">
            类型：  {{code2}}
          </div>
          <div class="code">
            带徽标的头像：  {{code3}}
          </div>
          <div class="code">
            自动调整字符大小：  {{code4}}
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
              <td>shape</td>
              <td>指定头像的形状，可选值为 circle、square</td>
              <td>String</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>size</td>
              <td>设置头像的大小，可选值为 large、small、default</td>
              <td>String</td>
              <td>default</td>
            </tr>
            <tr>
              <td>src</td>
              <td>图片类头像的资源地址</td>
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
  import avatar from '../../components/avatar.vue'
  import badge from '../../components/badge.vue'

  const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
  const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


  export default {
    data(){
      return{
        activeNames:['1','2'],
        user: UserList[0],
        color: ColorList[0],
        src:'../../../static/images/lockon.jpg',
        code1:`
            <avatar size="large"><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar size="small"><i class="ivu-icon ivu-icon-person"></i></avatar>

            <avatar size="large" shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar  shape="square" ><i class="ivu-icon ivu-icon-person"></i></avatar>
            <avatar size="small"  shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
        `,
        code2:`
            <avatar :src=src></avatar>
            <avatar><i class="ivu-icon ivu-icon-person"></i></avatar>
        `,
        code3:`
           <badge  count="1">
              <avatar shape="square"><i class="ivu-icon ivu-icon-person"></i></avatar>
            </badge>
        `,
        code4:`
          <avatar :style="{background: color}">{{ user }}</avatar>
        `
      }
    },
    components:{
      avatar,badge
    },
    methods:{
      handleChange(val){
        console.log(val);
      },
      handleChangeA () {
        const index = UserList.indexOf(this.user);
        this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
        this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
      }
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
  .ibutton{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 200;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    line-height: 1.2;
    user-select: none;
    outline: none;
    padding: 6px 15px;
    font-size: 12px;
    border-radius: 4px;
    color: #495060;
    background-color: #f7f7f7;
    border:1px solid #dddee1;
  }
  .ivu-icon {
    display: inline-block;
    font-family: Ionicons;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .ivu-icon-person:before {
    content: "\2640";
  }
  .code{
    border-radius: 3px;
    background-color:#f7f7f7;
    color: inherit;
    padding:5px 10px;

  }
</style>
