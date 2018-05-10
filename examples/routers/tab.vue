<template>
  <i-article>
  <article>
    <Anchor title="sg-tab" h1></Anchor>
    <p class="bd-lead">选项卡切换组件，常用于平级区域大块内容的的收纳和展现。</p>
    <Anchor title="代码示例" h2></Anchor>
    <Demo title="基础用法">
      <div v-cloak slot="demo">
        <sg-tabs @closeTab="closeTab" @addTab="addTab" v-model='value'><!--ref="child"-->
          <sg-pane :label="item.label" :textData="textData" :name='item.name' v-for="(item, index) in textData">
              {{item.content}}
          </sg-pane>
          <!-- <sg-pane label="标签一" name='1' :textData="textData">
              标签一的内容
          </sg-pane>
          <sg-pane label="标签2" name='2' :textData="textData">
              标签2的内容
          </sg-pane>
          <sg-pane label="标签3" name='3' :textData="textData">
              标签22的内容
          </sg-pane> -->
        </sg-tabs>
      </div>
    </Demo>
    <i-code lang="html" slot="code">{{ code.base1 }}</i-code>
    <Anchor title="API" h2></Anchor>
    <Anchor title="page props" h3></Anchor>
    <table class="doc-table">
        <thead>
            <tr>
                <th>属性</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>value</td>
                <td>
                    tab默认选中
                </td>
                <td>Number</td>
                <td>-</td>
            </tr>
            <tr>
                <td>textData</td>
                <td>
                    tabs内容:(label:标签名称;name:标签标记;content:tab页内容)
                </td>
                <td>Array</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
    <Anchor title="page events" h3></Anchor>
    <table class="doc-table">
        <thead>
            <tr>
                <th>事件名</th>
                <th>说明</th>
                <th>返回值</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>closeTab</td>
                <td>关闭Tab</td>
                <td>-</td>
            </tr>
            <tr>
                <td>addTab</td>
                <td>添加Tab</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
  </article>
  </i-article>

</template>
<script>
import iArticle from '../components/article'
import iCode from '../components/code';
import Demo from '../components/demo.vue';
import Anchor from '../components/anchor.vue';
import Code from '../code/tabs';
export default {
	components:{
		iCode,
    Demo,
    iArticle,
    Anchor,
    Code
	},
		
  data() {
      return {
        value: '1',
        textData: [{
          label: "标签1",
          name: '1',
          content: "111"
        },{
          label: "标签2",
          name: '2',
          content: "222"
        },{
          label: "标签3",
          name: '3',
          content: "333"
        }],
        thisNo: 4,
        code: Code,
      }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    closeTab(index){
      this.textData.splice(index,1);
      // this.$refs.child.childFn();
    },
    addTab(){
      this.textData.splice(this.textData.length,0,{
        label: '标签'+this.thisNo,
        name: ''+this.thisNo,
        content: ''+this.thisNo
      });
      this.thisNo++;
    }
  }
};
</script>
<style>
    .highlight {
        margin-top: 0;
    }
    [v-cloak]{
        display: none;
    }
    .tabs{
        font-size: 14px;
        color: #657180;
        
    }
    .tabs-bar:after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #d7dde4;
        margin-top:-1px;
    }
    .tabs-tab{
        display: inline-block;
        padding: 4px 24px;
        margin-right: 6px;
        background: #fff;
        border: 1px solid #d7dde4;
        cursor: pointer;
        position: relative;
    }
    .tabs-tab-active{
        color: #3399ff;
        border-top: 1px solid #3399ff;
        border-bottom: 1px solid #3399ff;
    }
    .tabs-tab-active:before{
        content: '';
        display: block;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .tabs-content{
        padding: 8px 0;
    }
</style>


