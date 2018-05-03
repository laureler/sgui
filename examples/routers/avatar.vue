<template>
  <i-article>
    <article>
      <Anchor title="sg-avatar" h1></Anchor>
      <p class="bd-lead">头像组件，用来代表用户或事物，支持图片、图标或字符展示。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-avatar size="large" >头像</sg-avatar>
          <sg-avatar >头像</sg-avatar>
          <sg-avatar size="small">头像</sg-avatar>
        </div>
        <div slot="desc">
          <p>基本用法，头像有三种尺寸，两种形状可选。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>
      <Demo title="类型">
        <div slot="demo">
          <sg-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
          <sg-avatar style="color: #f56a00;background-color: #fde3cf">U</sg-avatar>
          <sg-avatar style="background-color: #87d068" icon="person" />
        </div>
        <div slot="desc">
          <p>支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.type }}</i-code>
      </Demo>
      <Demo title="带徽标的头像">
        <div slot="demo">
          <sg-badge  count="2">
            <sg-avatar shape="square">头像</sg-avatar>
          </sg-badge>
          <sg-badge dot>
            <sg-avatar shape="square">头像</sg-avatar>
          </sg-badge>
        </div>
        <div slot="desc">
          <p>通常用于消息提示。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.badge }}</i-code>
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
          <td>shape</td>
          <td>指定头像的形状，可选值为 <code>circle</code>、<code>square</code>
          </td>
          <td>String</td>
          <td>circle</td>
        </tr>
        <tr>
          <td>size</td>
          <td>设置头像的大小，可选值为  <code>large</code>、<code>small</code>、<code>default</code></td>
          <td>String</td>
          <td>default</td>
        </tr>
        <tr>
          <td>src</td>
          <td>图片类头像的资源地址</td>
          <td>String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>icon</td>
          <td>设置头像的图标类型，参考 sgIcon 组件</td>
          <td>String</td>
          <td>-</td>
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
  import Code from '../code/avatar';
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
