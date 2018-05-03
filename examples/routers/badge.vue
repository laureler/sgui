<template>
  <i-article>
    <article>
      <Anchor title="sg-badge" h1></Anchor>
      <p class="bd-lead">徽标组件，用来代表用户或事物，支持图片、图标或字符展示。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-badge  count="3">
            <a href="#" class="demo-badge"></a>
          </sg-badge>
        </div>
        <div slot="desc">
          <p>基本用法,显示默认</p>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>
      <Demo title="小红点">
        <div slot="demo">
          <sg-badge dot >
            <a href="#" class="demo-badge"></a>
          </sg-badge>
        </div>
        <div slot="desc">
          <p>显示小红点</p>
        </div>
        <i-code lang="html" slot="code">{{ code.dot }}</i-code>
      </Demo>
      <Demo title="封顶数字">
        <div slot="demo">
          <sg-badge  count="1000" overflow-count="999">
            <a href="#" class="demo-badge"></a>
          </sg-badge>
        </div>
        <div slot="desc">
          <p>通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+</p>
        </div>
        <i-code lang="html" slot="code">{{ code.number }}</i-code>
      </Demo>
      <Demo title="独立使用">
        <div slot="demo">
          <sg-badge  count="2"></sg-badge>
        </div>
        <div slot="desc">
          <p>可以没有 slot 独立展示。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.self }}</i-code>
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
          <td>count</td>
          <td>显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏</td>
          <td>Number | String</td>
          <td>-</td>
        </tr>
        <tr>
          <td>overflow-count</td>
          <td>展示封顶的数字值</td>
          <td>String | Number</td>
          <td>99</td>
        </tr>
        <tr>
          <td>dot</td>
          <td>不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>class-name</td>
          <td>自定义的class名称，dot 模式下无效</td>
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
  import Code from '../code/badge';
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
<style >
  .demo-badge{
    width: 42px;
    height: 42px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
</style>

