<template>
	<div class="module-page">
		<div class="title">
			<div class="back" onclick="window.history.go(-1)">返回</div>
			<p class="name">二维码</p>
		</div>
		<div class="wrap">
				<el-collapse v-model="activeNames" @change="handleChange">
  				<el-collapse-item title="组件演示" name="1">
    			    输入生成二维码参数：
                    <input type="text" v-model="value"><br>
                    {{initial==''?'http://qr.liantu.com/api.php?text=':initial}}{{value}}
                    
                    <ui-qrcode :uiSrc="initial" :params="value"></ui-qrcode>
  				</el-collapse-item>
  				<el-collapse-item title="使用说明" name="2">
   			    	<p> < ui-qrcode :uiSrc="initial" :params="value"> </ ui-qrcode></p>   
                    <p> :uiSrc 为生成二维码的地址 默认为 http://qr.liantu.com/api.php?text=</p>
                    <p> :params 为生成二维码所传入参数 默认为空</p>
                
  				</el-collapse-item>
 				
			</el-collapse>
		</div>
	</div>
</template>
<script>
import uiQrcode from '../../components/uiQrcode.vue'
export default {
    components:{uiQrcode},
    data() {
        return {
             activeNames: ["1"],
             initial:'',
             value:''
        }
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    },  
  mounted(){
     
  }

};
</script>
