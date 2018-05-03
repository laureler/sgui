<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="放大镜" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
             <div id="glassTest"></div>
        </div>
      <div slot="desc">
        
      </div>
      <i-code lang="html" slot="code">
           mounted(){
                uiScript.magnifyGlass({ id:'glassTest', img:'url(' + require('../../src/assets/images/timg.jpg') + ')'}) 
           },
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
        <td>id</td>
        <td>传入dom的id 
        </td>
        <td>dom</td>
        <td>空</td>
      </tr>
      <tr>
        <td>img</td>
        <td><i-code>background-image:url(img)</i-code></td>
        <td>String</td>
        <td>空</td>
      </tr>
      <tr>
        <td>width</td>
        <td>矩形滤镜宽度</td>
        <td>Number</td>
        <td>200</td>
      </tr>
      <tr>
        <td>mulriple</td>
        <td>放大倍数</td>
        <td>Number</td>
        <td>2</td>
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
       
      }
    },
    mounted(){
        uiScript.magnifyGlass({ id:'glassTest', img:'url(' + require('../../src/assets/images/timg.jpg') + ')'}) 
    },
   
  }
</script>

<style scoped>
#glassTest{
    width:578px;
    height:326px;
}
</style>