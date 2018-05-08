<template>
  <i-article>
  <article>
    <Anchor title="sg-pdf" h1></Anchor>
    <p class="bd-lead">PDF文件预览</p>
    <Anchor title="代码示例" h2></Anchor>
    <Demo title="基础用法">
      <div slot="demo" style="height:500px">  
          <sg-pdf :pdfSrc="src"></sg-pdf> 
      </div>
      <div slot="desc" 
        <p>使用方法，将数据绑定到 <code>pdfSrc</code></p>
      </div>
      <i-code lang="html" slot="code">{{ code.base }}</i-code>
    </Demo>
    
    <Anchor title="API" h2></Anchor>
    <Anchor title="props" h3></Anchor>
    <table class="doc-table">
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
        <td>pdfSrc</td>
        <td>预览PDF文件的文件地址
        </td>
        <td>String</td>
        <td>空</td>
      </tr>     
      </tbody>
    </table>

   
  </article>
  </i-article>

</template>
<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/pdfPreview';
  import Anchor from '../components/anchor.vue';

  export default {
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data() {
      return {
        code: Code,
        src:"./static/test.pdf"    
      }
    }
  }
</script>



 