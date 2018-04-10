<template>
	<div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">图片放大</p>
		</div>
		<div class="wrap">
				<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="代码演示" name="1">
                        uiScript.magnifyGlass({
                            id:'glass-test',
                            img:'../../../static/images/timg.jpg'
                        })
                    
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
                       uiScript.magnifyGlass({
                            id:id,
                            img:url,
                            width:width,
                            mulriple:num
                        })

                    <p>id {dom} 节点</p>
                    <p>img {string} 图片路径</p>
                    <p>width {number} 正方形放大镜的宽度</p>
                    <p>mulriple {number} 放大倍数 大于1的整数</p>
                    
  				</el-collapse-item>
  				<el-collapse-item title="功能演示" name="3">
                 <div id="glass-test"></div>
                  
  				</el-collapse-item>
 			
			</el-collapse>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
             activeNames: ["1","2","3"],
             value:{}
        }
    },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  mounted(){
        uiScript.magnifyGlass({
        id:'glass-test',
        img:'../../../static/images/timg.jpg'
     })
  }
};
</script>
<style>
    #glass-test{
        width:576px;
        height:360px;
        margin:20px;
        border:1px solid #dddddd;
    }
</style>



