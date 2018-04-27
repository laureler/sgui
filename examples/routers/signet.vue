<template>
  <i-article>
    <article>
      <Anchor title="sg-signet" h1></Anchor>
      <p class="bd-lead">印章组件，用来代表用户或事物，支持图片、图标或字符展示。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法"></Demo>
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
          <td>type</td>
          <td>输入框类型，可选值为 <code>text</code>、<code>password</code>、<code>textarea</code>、<code>url</code>、<code>email</code>、<code>date</code>
          </td>
          <td>String</td>
          <td>text</td>
        </tr>
        <tr>
          <td>value</td>
          <td>绑定的值，可使用 v-model 双向绑定</td>
          <td>String | Number</td>
          <td>空</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td>占位文本</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>clearable</td>
          <td>是否显示清空按钮</td>
          <td>Boolean</td>
          <td>true</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>设置输入框为禁用状态</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>readonly</td>
          <td>设置输入框为只读</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>输入框尾部图标，仅在 text 类型下有效</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>number</td>
          <td>将用户的输入转换为 Number 类型</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>autofocus</td>
          <td>自动获取焦点</td>
          <td>Boolean</td>
          <td>false</td>
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
  import Code from '../code/input';
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
