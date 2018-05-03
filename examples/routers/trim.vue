<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="String处理" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
            传入字符串:{{str}},长度：{{str.length}}
            <br>
            返回：{{result}},长度{{result.length}}
           
            <br>
            使用方法：
          <i-code lang="html">
              uiscript.trim(str)
              data(){
                return {
                    str:' a b c  ?  ',
                    result:''
                
                }
            },
            mounted(){
        
                this.result= uiScript.trim(this.str);
                
            }
                
          </i-code>
        </div>
      <div slot="desc">
        
      </div>
   
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
        <td>str </td>
        <td>传入str
        </td>
        <td>String</td>
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
          str:' a b c  ?  ',
          result:''
       
      }
    },
    mounted(){
   
        this.result= uiScript.trim(this.str);
        
    }
   
  }
</script>

<style scoped>

</style>