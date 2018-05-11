let code ={};
code.base=`
  <template>
    <div>
       <sg-rate v-model="value"></sg-rate>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value:4
      }
    }
  }
</script>
`;
code.half=`
<template>
    <div>
       <sg-rate allow-half v-model="value1"></sg-rate>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value1:2
      }
    }
  }
</script>
`;
code.show=`
<template>
    <div>
       <sg-rate show-text v-model="value2">
           <span style="color: #f5a623">{{ value2 }}</span>
      </sg-rate>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value2:3
      }
    }
  }
</script>
`;
code.read=`
<template>
    <div>
       <sg-rate disabled v-model="value3"></sg-rate>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value3:2
      }
    }
  }
</script>
`;
export default code;
