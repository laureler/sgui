<template>
  <i-article>
  <article>
    <Anchor title="sg-tree" h1></Anchor>
    <p class="bd-lead">文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。
    使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。。</p>
    <Anchor title="代码示例" h2></Anchor>
    <Demo title="基础用法">
      <div slot="demo">
         <sg-tree :treeData.sync='data'></sg-tree>
      </div>
      <div slot="desc" 
        <p>>最简单的用法，默认展开功能，将数据绑定到 <code>treeData.sync</code>树宽度默认 100%。可自己设置宽度 </p>
      </div>
      <i-code lang="html" slot="code">{{ code.base }}</i-code>
    </Demo>
    <Demo title="基础操作回调事件绑定">
      <div slot="demo">
        <sg-tree :treeData.sync='data' :nodeClick="nodeClick" :expand = "expandFun" :cxtmenu='contextmenuClick'></sg-tree>
      </div>
      <div slot="desc">
        <p>绑定<code>nodeClick</code>点击节点时触发绑定事件</p>
        <p>绑定<code>expand</code>节点展开收起时时触发绑定事件</p>
        <p>绑定<code>cxtmenu</code>节点鼠标右击触发绑定事件</p>
      </div>
      <i-code lang="html" slot="code">{{ code.callback }}</i-code>
    </Demo>
    <Demo title="可编辑的树节点">
      <div slot="demo">
        <sg-tree :treeData.sync='data' :nodeClick="nodeClick" :expand = "expandFun" :cxtmenu='contextmenuClick' :isEdit='true' :editnode='editnode' :delnode='beforedel'></sg-tree>
      </div>
      
    </Demo>

     
    <Anchor title="API" h2></Anchor>
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
    </table>
   
  </article>
  </i-article>

</template>
<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/tree';
  import Anchor from '../components/anchor.vue';

  export default {
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data() {
      return {
        code: Code,
        data:[{
                    title: 'parent 1',
                    expand: true,
                    children: [
                            {
                              title: 'parent 1-1',
                              expand: true,
                              children: [
                                      { title: 'leaf 1-1-1'},
                                      {title: 'leaf 1-1-2'}
                                   ]
                             },
                            {
                                title: 'parent 1-2',
                                children: [
                                    {title: 'leaf 1-2-1-1'},
                                    {title: 'leaf 1-2-1-2'}
                                ]
                            }]
                    }]
      }
    },
    methods: {
      nodeClick(m){
        console.log("节点点击回调:")
        console.log(m)
      },
      expandFun(m){
        console.log("展开收起回调:")
        console.log(m)
      },
      contextmenuClick(m){
        console.log("右击事件回调:")
        console.log(m)
      },
      editnode(m){
         console.log("修改节点成功:")
         console.log(m)
      },
      beforedel(m){
        console.log("删除回调:")
        console.log(m)
      }
    }
  }
</script>


