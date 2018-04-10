<template>
	<div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">tab切换</p>
		</div>
		<div class="wrap">
				<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    				组件演示
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
export default {
    data() {
        return {
            activeNames: ["1"],
            textData: [{

            },{

            }],
        }
    },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>
<style lang="less">
    
</style>