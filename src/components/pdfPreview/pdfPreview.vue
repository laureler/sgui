<template>
	<div  >
        <div class="loading-pdf" v-if="isloading">{{loadingTxt}}</div>
        <div id="pdf" style="height:400px"></div>
    </div>
</template>
<script>
import PDFObject from "./pdf/pdfobject.js"   
    export default{
        data(){
            return{
                isloading:true,
                loadingTxt:"拼命加载中..."
            } 
        },
        mounted(){
             PDFObject.embed("./../../static/test.pdf", "#pdf");
        }

    }
</script>