let code = {};

code.base = `
<template>
    <sg-qrcode :uiSrc="initial" :params="value"> </sg-qrcode>
</template>

<script>
    export default {
        data() {
            return {
                initial:'',
                value:'123'
            }
        }
    }
</script>
`;
export default code;