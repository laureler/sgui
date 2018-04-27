<template>
  <i-article>
    <article>
      <Anchor title="sg-signet" h1></Anchor>
      <p class="bd-lead">印章组件</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-signet></sg-signet>
        </div>
        <div slot="desc">
          <p>基本用法,显示默认</p>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>
      <Demo title="自定义宽高">
        <div slot="demo">
          <sg-signet :iWidth="100" :iHeight="100"></sg-signet>
        </div>
        <div slot="desc">
          <p>自定义宽高</p>
        </div>
        <i-code lang="html" slot="code">{{ code.auto }}</i-code>
      </Demo>
      <Demo title="自定义内容">
        <div slot="demo">
          <sg-signet name="测试用印章" organization="北方数码科技有限公司"></sg-signet>
        </div>
        <div slot="desc">
          <p>自定义印章名、单位名称</p>
        </div>
        <i-code lang="html" slot="code">{{ code.edit }}</i-code>
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
          <td>iWidth</td>
          <td>印章宽度</td>
          <td>Number</td>
          <td>150</td>
        </tr>
        <tr>
          <td>iHeight</td>
          <td>印章高度</td>
          <td>Number</td>
          <td>150</td>
        </tr>
        <tr>
          <td>name</td>
          <td>印章名</td>
          <td>String</td>
          <td>测试专用章</td>
        </tr>
        <tr>
          <td>organization</td>
          <td>印章单位名</td>
          <td>Boolean</td>
          <td>南方数码研发中心团队</td>
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
  import Code from '../code/signet';
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
      }
    }
  }
</script>
<style>
</style>
