<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="数字格式化" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
            传入数字：{{num}}
            <br>
            返回：{{result}}
            <br>
            返回：{{result1}}
            <br>
            使用方法：
          <i-code>
              uiScript.NumFormat(number, places, symbol, thousand, decimal)

                 data(){
                    return {
                        num:12345678,
                        result:'',
                        result1:''
                    }
                },
                mounted(){
            
                    this.result= uiScript.NumFormat(this.number,2,'$',',','.')
                    this.result1= uiScript.NumFormat(this.number,0,'$',',','.')
                }
                
          </i-code>
        </div>
      <div slot="desc">
        
      </div>
      <i-code lang="html" slot="code">
          
      </i-code>
    </Demo>
     <Anchor title="参数说明" h2></Anchor>
    <table>
      <thead>
      <tr>
        <th>属性</th>
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>number </td>
        <td>传入数字 
        </td>
        <td>Number</td>
        <td>空</td>
      </tr>
      <tr>
        <td>places  </td>
        <td>保留小数点的位数</td>
        <td>Number</td>
        <td>空</td>
      </tr>
      <tr>
        <td>symbol   </td>
        <td>头部添加符号</td>
        <td>String</td>
        <td>空</td>
      </tr>
      <tr>
        <td>thousand   </td>
        <td>千位分隔符</td>
        <td>String</td>
        <td>空</td>
      </tr>
      <tr>
        <td>decimal    </td>
        <td>小数点分隔符</td>
        <td>string</td>
        <td>空</td>
      </tr>
     
     </tbody>
    </table>
       </article>
  </i-article>
  </div>
</template>


<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Anchor from '../components/anchor.vue';
  import uiScript from '../../src/script/uiScript'   
  export default {
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data(){
      return {
          num:12345678,
          result:'',
          result1:''
      }
    },
    mounted(){
   
        this.result= uiScript.NumFormat(this.num,2,'$',',','.')
        this.result1= uiScript.NumFormat(this.num,0,'$',',','.')
    }
   
  }
</script>

<style scoped>
#glassTest{
    width:578px;
    height:326px;
}
</style>