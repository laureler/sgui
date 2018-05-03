<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="sg-qrcode" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
             <sg-qrcode :uiSrc="initial" :params="value"> </sg-qrcode>
        </div>
      <div slot="desc">
        
      </div>
      <i-code lang="html" slot="code">{{ code.base }}</i-code>
    </Demo>
     <Anchor title="API" h2></Anchor>
    <Anchor title="props" h3></Anchor>
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
        <td>uiSrc</td>
        <td>生成二维码接口地址 
        </td>
        <td>String</td>
        <td>http://qr.liantu.com/api.php?text=</td>
      </tr>
      <tr>
        <td>params</td>
        <td>生成二维码需要的内容</td>
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
  import Code from '../code/qrcode';
  import Anchor from '../components/anchor.vue';
  export default {
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data(){
      return {
        code:Code,
        initial:'',
        value:'123'
      }
    }
  }
</script>

<style scoped>

</style>