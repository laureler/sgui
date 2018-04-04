<template>
    <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">图片转base64</p>
		</div>
		<div class="wrap">
            <el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    				 <p>示例代码：uiScript.getBase64(img)</p>
				 <p>参数img 类型：dom 原生对象 or String 图片地址</p>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   				   <p>图1：正常src引入渲染图片</p>
				     <img id="getBase" src="../../../static/images/lockon.jpg" alt="">
                 	<p>图2：通过图1 转为base64 渲染</p>
				    <img  :src="base64" alt="">
  				</el-collapse-item>
 				<el-collapse-item title="代码" name="3">
    		 			说明：可在控制台查看img 的 src属性
  				</el-collapse-item>
			</el-collapse>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      base64: "",
    activeNames: ["1","2","3"]
    };
  },
  mounted() {
    var img = document.getElementById("getBase");
    this.base64 = uiScript.getBase64(img);
  },
   methods: {
    handleChange(val) {
        console.log(val);
    }
  }
};
</script>

<style scoped>
.wrap div {
  padding: 5px;
}
</style> 