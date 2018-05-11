let code ={};
code.base=`
  <template>
    <div>
       <sg-inputNumber :max="10" :min="1" v-model="value"></sg-inputNumber>
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
code.decimal=`
<template>
    <div>
       <sg-inputNumber :max="10" :min="1"  :step="1.2" v-model="value1"></sg-inputNumber>
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
code.format=`
<template>
    <div>
       
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value2:1000,
        value3:100,
      }
    }
  }
</script>
`;
code.size=`
<template>
    <div>
       <sg-inputNumber  size="small" v-model="value4"></sg-inputNumber>
          <sg-inputNumber  v-model="value5"></sg-inputNumber>
          <sg-inputNumber size="large" v-model="value6"></sg-inputNumber>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value4:2,
        value5:4,
        value6:6,
      }
    }
  }
</script>
`;
code.disabled=`
<template>
    <div>
       <sg-inputNumber disabled v-model="value7"></sg-inputNumber>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value7:8
    }
  }
</script>
`;
code.readonly=`
<template>
    <div>
        <sg-inputNumber readonly  v-model="value8"></sg-inputNumber>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value8:8
      }
    }
  }
</script>
`;
code.editable=`
<template>
    <div>
       <sg-inputNumber :editable="false"  v-model="value9"></sg-inputNumber>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value9:8
      }
    }
  }
</script>
`;
export default code;
