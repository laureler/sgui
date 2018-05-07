<style lang="less">
  .identity {
    border-radius: 3px;
    border: 1px solid #ccc;
    border-top: 3px solid #a57e55;
    box-shadow: 0px 2px 2px 0px rgba(227, 227, 227, 1);
    margin-top: 25px;
    background-color: #fff;

    .operating {
      ul {
        li {
          height: 65px;
          list-style: none;
          background-position: center;
          background-repeat: no-repeat;
          cursor: pointer;
          &.test1 {
            background-image: url("../../static/test1.png");
          }
          &.test2 {
            background-image: url("../../static/test2.png");
          }
        }
      }
    }
    table {
      width: 100%;
      tr {
        td {
          border: 1px solid #ccc;
          .sg-input {
            border: none;
            outline: 0;
          }
        }
      }
      .cell {
        text-align: right;
        padding-right: 8px;
        width: 100px;
      }
    }
  }


</style>
<template>
  <div>
    <sg-collapse class="identity" v-for="(item,index) in data" :key="index" v-model="md">
      <sg-panel :name="item.name">
        <div style="height: 65px;position: relative;">
          <div style="float: left;margin:5px 0 5px 20px;">
            <img src="../../static/test.png" alt="">
          </div>
          <div style="overflow: hidden;padding-left: 23px;padding-top: 10px;">
            <div style="margin-bottom: 5px;">
              权利人：
              <span>{{item.name}}</span>
            </div>
            <div style="display: inline-block">
              身份证：
              <span>{{item.identity}}</span>
            </div>
            <div style="display: inline-block;margin-left: 25px;">
              产权证号：
              <span>{{item.number}}</span>
            </div>
          </div>
          <div style="position: absolute;top:0;right:0;width: 34px;border-left: 1px solid #ccc;height: 100%;"
               class="operating">
            <ul>
              <li class="test1" @click.stop="deleteIf"></li>
            </ul>
          </div>
        </div>
        <slot :row="item" slot="content"></slot>
      </sg-panel>
    </sg-collapse>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Array
      }
    },
    data(){
      return{
        md:'黄坚辉'
      }
    },
    methods:{
      deleteIf(){
        let con=confirm("您确定删除吗?");
        if(con==true){
          alert("已删除!");
        }
      }
    }
  }
</script>
