<template>
	<div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">树控件</p>
		</div>
		<div class="wrap">
			<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    				 <mine-tree :list.sync='treeData' :is-open='true'></mine-tree>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   				    使用说明...
  				</el-collapse-item>
 				<el-collapse-item title="代码" name="3">
    		 		代码...
  				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>
<script>
import mineTree from '../../components/minetree.vue'
  export default {
    components:{
      mineTree
    },
    data() {
      return {
        treeData:[{
                id:1,
                name:"音乐",
                children:[],
                url:"http://www.baidu.com"
            },{
              id:2,
              name:"视频",
              children:[{
             id:3,
             name:"电影",
             children:[{
                id:4,
                name:"国产电影",
                url:""
             },{
                id:5,
                name:"好莱坞电影",
                url:""
             },{
                id:6,
                name:"小语种电影",
                url:""
             }]
              },{
               id:7,
              name:"短片",
              children:[{
                id:9,
                name:"电视剧",
                url:""
             },{
                id:10,
                name:"短片",
                url:""
             }]
          }]
        }],
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>