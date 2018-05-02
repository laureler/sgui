<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="图片转base64" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2>
    </Anchor>
    <slot name="desc">
        <Anchor title="原图" h3>
        </Anchor>
         <img class="test" id="demo" src="../../src/assets/images/timg.jpg" alt="">
         <Anchor title="base64图片" h3>
        
        </Anchor>
        <img class="test" :src="base64" alt="">
        <br>
        可通过调试工具查看src属性
    </slot>
    <Demo title="基础用法">
        <div slot="demo" >
            
           
            <br>
            使用方法：
          <i-code lang="html">
             示例代码：uiScript.getBase64(img)
              data(){
                return {
                    base64:''
                
                }
            },
            mounted(){
                var img=document.getElementById('demo');
                this.base64=uiScript.getBase64(img);
                
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
        <td>img  </td>
        <td>dom 原生对象 or String 图片地址
        </td>
        <td>String|dom</td>
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
         base64:''
       
      }
    },
    mounted(){
        var img=document.getElementById('demo');
        this.base64=uiScript.getBase64(img);
        
    }
   
  }
</script>

<style scoped>
.test{
    width:568px;
    height:329px;
}
</style>