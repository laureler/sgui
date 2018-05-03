<template>
  <i-article>
  <article>
    <Anchor title="sg-tree" h1></Anchor>
    <p class="bd-lead">文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。
    使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。。</p>
    <Anchor title="代码示例" h2></Anchor>
    <Demo title="基础用法">
      <div v-cloak slot="demo">
        <sg-tabs @closeTab1="closeTab2" @addTab1="addTab2" v-model='value'>
          <sg-pane :label="item.label" :name='item.name' v-for="(item, index) in textData">
              {{item.content}}
          </sg-pane>

          <!-- <pane label="标签一" name='1'>
              标签一的内容
          </pane>
          <pane label="标签二" name='2'>
              标签二的内容
          </pane>
          <pane label="标签三" name='3'>
              标签三的内容
          </pane> -->
        </sg-tabs>
      </div>
    </Demo>
    <!-- <Demo title="事件绑定案例">
      <div slot="demo">
        <sg-tree :treeData.sync='data' :nodeClick="nodeClick" :expand = "expandFun" :cxtmenu='contextmenuClick'></sg-tree>
      </div>
      <div slot="desc">
        <p>绑定<code>nodeClick</code>点击节点时触发绑定事件</p>
        <p>绑定<code>expand</code>节点展开收起时时触发绑定事件</p>
        <p>绑定<code>cxtmenu</code>节点鼠标右击触发绑定事件</p>
      </div>
      <i-code lang="html" slot="code">{{ code.callback }}</i-code>
    </Demo> -->
     
     
    <!-- <Anchor title="API" h2></Anchor>
    <Anchor title="props" h3></Anchor>
    <table>
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
        <td>treeData.sync</td>
        <td>可嵌套的节点属性的数组，生成 tree 的数据
        </td>
        <td>Array</td>
        <td>[ ]</td>
      </tr>
     
      </tbody>
    </table>
    <Anchor title="events" h3></Anchor>
    <table>
      <thead>
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>nodeClick</td>
        <td>点击节点时触发</td>
        <td>无</td>
      </tr>
      <tr>
        <td>expand</td>
        <td>节点展开收起时时触发</td>
        <td>无</td>
      </tr>
      <tr>
        <td>cxtmenu</td>
        <td>鼠标右击触发</td>
        <td>无</td>
      </tr>
      
      </tbody>
    </table>
   <Anchor title="children" h3></Anchor>
    <table>
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
        <td>title</td>
        <td>标题</td>
        <td>String | Element String</td>
        <td>无</td>
      </tr>
      <tr>
        <td>expand</td>
        <td>是否展开直子节点</td>
        <td>Boolean</td>
        <td>false</td>
      </tr>
      
      
      </tbody>
    </table> -->
   
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
          name: '4',
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
        }],

      }
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    closeTab2(index){
      this.textData.splice(index,1);
    },
    addTab2(){
      // this.newTab.label += this.thisNo;
      // this.newTab.name += this.thisNo;
      // this.newTab.content += this.thisNo;
      // console.log(this.newTab)
      this.textData.splice(this.textData.length,0,this.newTab);
      // this.thisNo++;
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
			padding: 4px 16px;
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


