<template>
    <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">图片转base64</p>
		</div>
		<div class="wrap">
			 <div>组件演示
				 <p>示例代码：uiScript.getBase64(img)</p>
				 <p>参数img 类型：dom 原生对象 or String 图片地址</p>
			 </div>
			 <div>
				 <p>图1：正常src引入渲染图片</p>
				 <img id="getBase" src="../../../static/images/lockon.jpg" alt="">
			 </div>
			 <div>
				<p>图2：通过图1 转为base64 渲染</p>
				<img  :src="base64" alt="">
			 </div>
			 <div>说明：可在控制台查看img 的 src属性</div>
		</div>
	</div>
</template>

<script>
    export default {
		data() {
			return {
				base64:''
			}
		},
		mounted(){
	
			var img = document.getElementById('getBase');
			this.base64=uiScript.getBase64(img);
			
		}
    }
</script>

<style scoped>
	.wrap div{
		padding:5px;
	}
</style> 