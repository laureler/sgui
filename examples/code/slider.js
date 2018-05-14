let code ={};
code.base=`
  <template>
    <div>
       <Sg-slider v-model="value"></Sg-slider>
        <Sg-slider range  v-model="value1"></Sg-slider>
        <Sg-slider  range disabled v-model="value2"></Sg-slider>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        value:4,
        value1:[20,50],
        value2:[20,50],
      }
    }
  }
</script>
`;
code.disperse=`
<template>
    <div>
      <Sg-slider v-model="value3" :step="10"></Sg-slider>
          <Sg-slider v-model="value4" :step="10" range></Sg-slider>
    </div>
</template>
<script>
  export default {
    data(){
      return {
          value3:30,
        value4:[20,50],
      }
    }
  }
</script>
`;
code.dot=`
<template>
    <div>
      <Sg-slider v-model="value5" :step="10" show-stops></Sg-slider>
          <Sg-slider v-model="value6" :step="10"  show-stops range></Sg-slider>
    </div>
</template>
<script>
  export default {
    data(){
      return {
         value5:4,
        value6:[20,50],
      }
    }
  }
</script>
`;
code.input=`
<template>
    <div>
      <Sg-slider v-model="value7" show-input></Sg-slider>
    </div>
</template>
<script>
  export default {
    data(){
      return {
           value7:8,
      }
    }
  }
</script>
`;
code.self=`
<template>
    <div>
      <Sg-slider v-model="value8" :tip-format="format"></Sg-slider>
          <Sg-slider v-model="value9" :tip-format="hideFormat"></Sg-slider>
    </div>
</template>
<script>
  export default {
    data(){
      return {
      
        value8:8,
        value9:8,
      }
    }
  }
</script>
`;
export default code;
