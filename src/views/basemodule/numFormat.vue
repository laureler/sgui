<template>
     <div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">数字格式化</p>
		</div>
		<div class="wrap">
            <el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    				  <p>传入数字：{{number}}</p>
				 <p>返回：{{value}}</p>
				 <p>返回：{{value1}}</p>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   				   	<p>示例代码</p>	
				<p>参数类型 number {number}</p>
				<p>places {number}  保留小数点的位数</p>		
				<p>symbol {string}  头部添加符号</p>		
				<p>thousand {string}  千位分隔符</p>		
				<p>decimal {string}  小数点分隔符</p>	
  				</el-collapse-item>
 				<el-collapse-item title="代码" name="3">
    		 	<p>uiScript.NumFormat(number, places, symbol, thousand, decimal)</p>
				<p>uiScript.NumFormat(this.number,2,'$',',','.')</p>
				<p>uiScript.NumFormat(this.number,0,'$',',','.')</p>
  				</el-collapse-item>
			</el-collapse>
		
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      number: 12345678,
      value: "",
      value1: "",
      activeNames: ["1"]
    };
  },
  mounted() {
    this.value = uiScript.NumFormat(this.number, 2, "$ ", ",", ".");
    this.value1 = uiScript.NumFormat(this.number, 0, "$ ", ",", ".");
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