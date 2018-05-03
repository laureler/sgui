<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="url解析" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
            传入url:{{url}}
            <br>
            返回：{{result}}
           
            <br>
            使用方法：
          <i-code lang="html">
              uiscript.parseQueryString(url)
                data(){
                    return {
                        url:'localhost:9000?id=3&query="888"',
                        result:''
                    
                    }
                },
                mounted(){
            
                    this.result= uiScript.parseQueryString(this.url);
                    
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
        <td>url </td>
        <td>传入url 
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
          url:'localhost:9000?id=3&query="888"',
          result:''
       
      }
    },
    mounted(){
   
        this.result= uiScript.parseQueryString(this.url);
        
    }
   
  }
</script>

<style scoped>
#glassTest{
    width:578px;
    height:326px;
}
</style>