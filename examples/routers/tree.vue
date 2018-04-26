<template>
	<div style="background: #efefef; width:100%">
 	<div style="width:50%;padding:20px;background: #efefef;">
 	<div style="background:#fff;padding:20px;"> 
    <p>基础用法：</p>
     <sg-tree :treeData.sync='data'></sg-tree>
    <p>事件绑定</p>
     <sg-tree :treeData.sync='data' :nodeClick="nodeClick" :expand = "expandFun" :cxtmenu='contextmenuClick'></sg-tree>
	</div>
  	</div> 
  	</div>
</template>
<script>
 
  export default {
    data() {
      return {
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
                                    {title: 'leaf 1-2-1'},
                                    {title: 'leaf 1-2-1'}
                                ]
                            }]
                    }]
      };
    },
    methods: {
      nodeClick(m){
        console.log("节点点击回调:"+m)
      },
      expandFun(m){
        console.log("展开收起回调:"+m)
      },
      contextmenuClick(m){
        console.log("右击事件回调:"+m)
      }
    }
  }
</script>