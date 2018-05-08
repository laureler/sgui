let code = {};

code.base = `
 <template>
    <div style="height:600px">
       <sg-pdf :pdfSrc="src"></sg-pdf> 
    </div>
</template>
<script>
    export default{
        data(){
            return{
                src:"./static/test.pdf"
            }
        }
    }
</script> 
`;

export default code;
