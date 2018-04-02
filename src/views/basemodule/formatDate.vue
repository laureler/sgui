<template>
     <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">日期格式化</p>
		</div>
		<div class="wrap">
			 <div>
				 <p>传入{{new Date()}}</p>
				 <p>返回{{time}}</p>
			 </div>
			 <div>
				<p>示例代码</p>	
				<p>参数类型 now {date}</p>
				<p>symbol {string}  分隔符</p>		
				<p>uiScript.formatDate(now,symbol)</p>
				<p>uiScript.formatDate(new Date(),'-')</p>
             </div>
			 
			 <div></div>
		</div>
	</div>
</template>

<script>
    export default {
        data() {
			return {
				time: ''
			}
		},
		mounted(){
			this.time=uiScript.formatDate(new Date(),'-')
		}
    }
</script>

<style scoped>

</style>