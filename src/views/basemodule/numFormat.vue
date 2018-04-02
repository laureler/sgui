<template>
     <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">数字格式化</p>
		</div>
		<div class="wrap">
			 <div>
				 <p>传入数字：{{number}}</p>
				 <p>返回：{{value}}</p>
				 <p>返回：{{value1}}</p>
			 </div>
			 <div>
				<p>示例代码</p>	
				<p>参数类型 number {number}</p>
				<p>places {number}  保留小数点的位数</p>		
				<p>symbol {string}  头部添加符号</p>		
				<p>thousand {string}  千位分隔符</p>		
				<p>decimal {string}  小数点分隔符</p>		
				<p>uiScript.NumFormat(number, places, symbol, thousand, decimal)</p>
				<p>uiScript.NumFormat(this.number,2,'$',',','.')</p>
				<p>uiScript.NumFormat(this.number,0,'$',',','.')</p>
             </div>
			 
			 <div></div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
			return {
				number: 12345678,
				value:'',
				value1:''
			}
		},
		mounted(){
			this.value=uiScript.NumFormat(this.number,2,'$ ',',','.');
			this.value1=uiScript.NumFormat(this.number,0,'$ ',',','.')
		}
    }
</script>

<style scoped>

</style>