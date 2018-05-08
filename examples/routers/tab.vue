<template>
  <i-article>
  <article>
    <Anchor title="sg-tree" h1></Anchor>
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
   
  </article>
  </i-article>

</template>
<script>
import iArticle from '../components/article'
import iCode from '../components/code';
import Demo from '../components/demo.vue';
import Anchor from '../components/anchor.vue';
export default {
	components:{
		iCode,
    Demo,
    iArticle,
    Anchor
	},
		
  data() {
      return {
        value: '1',
        newTab: {
          label: '标签',
          name: '',
          content: ""
        },
        thisNo: 4,
        activeNames: ["1"],
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
        }]
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


