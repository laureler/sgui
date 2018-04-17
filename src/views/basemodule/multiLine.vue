<template>
    <div class="module-page">
      <div class="title">
        <div class="back" onclick="window.history.go(-1)">返回</div>
        <p class="name">多行文本省略</p>
      </div>
      <div class="wrap">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="组件演示" name="1">
            <p>不省略</p>
            <div >{{text}}
            </div>
            <p>多行省略</p>
            <div class="multiLine">{{text}}
            </div>
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
        text:"Flex布局有六个属性：\n" +
        "              \tflex-direction：属性决定主轴的方向（即项目的排列方向），有四个值可选：\n" +
        "              row（默认值）：主轴为水平方向，起点在左端。\n" +
        "              row-reverse：主轴为水平方向，起点在右端。\n" +
        "              column：主轴为垂直方向，起点在上沿。\n" +
        "              column-reverse：主轴为垂直方向，起点在下沿。\n" +
        "\n" +
        "              \tflex-wrap：属性定义，如果一条轴线排不下，如何换行。有三个值可选：\n" +
        "              nowrap（默认）：不换行。\n" +
        "              wrap：换行，第一行在上方。\n" +
        "              wrap-reverse：换行，第一行在下方。\n" +
        "              \tflex-flow：属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap\n" +
        "\n" +
        "              \tjustify-content：属性定义了项目在主轴上的对齐方式。有5个值可选\n" +
        "              flex-start（默认值）：左对齐\n" +
        "              flex-end：右对齐\n" +
        "              center： 居中\n" +
        "              space-between：两端对齐，项目之间的间隔都相等。\n" +
        "              space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。\n" +
        "\n" +
        "              \talign-items ：属性定义项目在交叉轴上如何对齐。\n" +
        "              flex-start：交叉轴的起点对齐。\n" +
        "              flex-end：交叉轴的终点对齐。\n" +
        "              center：交叉轴的中点对齐。\n" +
        "              baseline: 项目的第一行文字的基线对齐。\n" +
        "              stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度\n"
      }
    },
    methods:{
      handleChange(val){
          console.log(val);

      },
    },
    mounted(){
      uiScript.multiOverflowhidden('.multiLine',3,this.text);
    }
  }
</script>
<style>
  .multiLine{
    line-height:1.7;
  }
</style>
