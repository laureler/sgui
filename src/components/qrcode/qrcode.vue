<template>
    <div class="ui-qrcode">
        <img :src="baseUrl+params" alt="">
    </div>
</template>

<script>
    export default {
        data() {
            return {
                baseUrl: ''
            }
        },
        props:['uiSrc','params'],
        mounted(){
           if(this.uiSrc===''){
               this.baseUrl='http://qr.liantu.com/api.php?text='
           }else{
                this.baseUrl=this.uiSrc
           }
        }
    }
</script>

<style scoped>

</style>