let code ={};
code.base=`
  <template>
     <Sg-processBar :percent="25"></Sg-processBar>
          <Sg-processBar :percent="45"  status="active"></Sg-processBar>
          <Sg-processBar :percent="65"  status="wrong"></Sg-processBar>
          <Sg-processBar :percent="100"></Sg-processBar>
          <Sg-processBar :percent="25"></Sg-processBar>
</template>
`;
code.vertical=`
<template>
     <div style="height:100px;">
            <Sg-processBar vertical :percent="25"></Sg-processBar>
            <Sg-processBar vertical :percent="45" status="active"></Sg-processBar>
            <Sg-processBar vertical :percent="65" status="wrong"></Sg-processBar>
            <Sg-processBar vertical :percent="100"></Sg-processBar>
            <Sg-processBar vertical :percent="25" hide-info></Sg-processBar>
          </div>
</template>

`;
code.out=`
<template>
    <div>
       <Sg-processBar :percent="percent"></Sg-processBar>
          <Sg-button icon="ios-plus-empty" @click="add"> </Sg-button>
          <Sg-button icon="ios-minus-empty" @click="minus"></Sg-button>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        percent:3
      }
    },
     methods:{
      add () {
        if (this.percent >= 100) {
          return false;
        }
        this.percent += 10;
      },
      minus () {
        if (this.percent <= 0) {
          return false;
        }
        this.percent -= 10;
      }
    }
  }
</script>
`;
code.self=`
<template>
    <div>
       <Sg-processBar :percent="25" :stroke-width="5"></Sg-processBar>
          <Sg-processBar :percent="100">
            <Sg-icon type="checkmark-circled"></Sg-icon>
            <span>成功</span>
          </Sg-processBar>
    </div>
</template>

`;
export default code;
