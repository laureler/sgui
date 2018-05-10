let code = {};

code.base1 = `
<template>
    <sg-page :total="1000"  show-sizer show-elevator show-total transfer :current="12"></sg-page>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {

        }
    }
</script>
`;
code.base2 = `
<template>
<sg-page :total="1000"  size="small"  show-sizer show-elevator show-total transfer :current="12"></sg-page>
</template>
<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }
</script>
`;
code.base3 = `
<template>
    <sg-page :current="2" :total="50" simple></sg-page>
</template>
<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {

        }
    }
</script>
`;

 

export default code;
