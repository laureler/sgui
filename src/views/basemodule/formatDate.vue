<template>
     <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">日期格式化</p>
		</div>
		<div class="wrap">
			<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    				 <p>传入{{new Date()}}</p>
					 <p>返回{{time}}</p>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   				    <p>示例代码</p>	
					<p>参数类型 now {date}</p>
					<p>symbol {string}  分隔符</p>	
  				</el-collapse-item>
 				<el-collapse-item title="代码" name="3">
    		 			<p>参数类型 now {date}</p>
						<p>symbol {string}  分隔符</p>		
						<p>uiScript.formatDate(now,symbol)</p>
						<p>uiScript.formatDate(new Date(),'-')</p>
  				</el-collapse-item>
			</el-collapse>
		</div>

	</div>
</template>

<script>
export default {
    data() {
    return {
        time: "",
        activeNames: ["1","2","3"]
    };
  },
  mounted() {
        this.time = uiScript.formatDate(new Date(), "-");
  },
  methods: {
    handleChange(val) {
        console.log(val);
    }
  }
};
</script>

<style scoped>

</style>