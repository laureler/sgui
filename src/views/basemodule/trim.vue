<template>
	<div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">string处理（去除首尾空格）</p>
		</div>
		<div class="wrap">
				<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="代码演示" name="1">
    				  <p>	uiscript.trim('   ab c    ？     ')</p>
                      <p>返回：{{value}}</p>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   				      <p>  参数str 类型： String </p>
   				  <p>uiscript.trim(str)</p> 
  				</el-collapse-item>
 			
			</el-collapse>
		</div>
	</div>
</template>
<script>
export default {
    data() {
        return {
             activeNames: ["1"],
             value:''
        
        }
    },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  },
  mounted(){
      this.value= uiScript.trim('   ab c?     ');
      console.log(this.value)
  }
};
</script>
