<template>
	<div class="pdf-warp" style="height:100%">
        <div id="pdfObjectContent" style="height:100%"></div>
    </div>
</template>
<script>
import Vue from 'vue'
import PDFObject from "./pdf/pdfobject.js"
    export default{
        name:'SgPdf',
        props:{
            pdfSrc:{
                type:String,
                twoWay:true
            }
        },
        data(){
            return{
                pdfObjectSrc:''
            } 
        },
        watch:{
            'pdfSrc': {
                handler:function(){
                    this.initPdf()
                },
                deep:true
            }
        },
        methods:{
            initPdf(){
                console.log(this.pdfSrc)
                this.pdfObjectSrc = this.pdfSrc
                PDFObject.embed(this.pdfObjectSrc, "#pdfObjectContent",{page: "1"});
            }
        },
        update(){
            this.initPdf();
        },
        mounted(){
            Vue.nextTick(()=>{
                this.initPdf();
            })
        }
    }
</script>