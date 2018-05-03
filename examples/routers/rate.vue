<template>
  <i-article>
    <article>
      <Anchor title="sg-rate" h1></Anchor>
      <p class="bd-lead">评分组件，对事物进行快速的评级操作，或对评价进行展示。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-rate v-model="value"></sg-rate>
        </div>
        <div slot="desc">
          <p>基本用法,显示默认</p>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>
      <Demo title="半星">
        <div slot="demo">
          <sg-rate allow-half v-model="value1"></sg-rate>
        </div>
        <div slot="desc">
          <p>设置属性 allow-half 可以选中半星。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.half }}</i-code>
      </Demo>
      <Demo title="显示提示">
        <div slot="demo">
          <sg-rate show-text v-model="value2">
            <span style="color: #f5a623">{{ value2 }}</span>
          </sg-rate>
        </div>
        <div slot="desc">
          <p>设置属性 show-text 可以显示提示文字。
            提示内容也可以通过 slot 自定义</p>
        </div>
        <i-code lang="html" slot="code">{{ code.show }}</i-code>
      </Demo>
      <Demo title="只读">
        <div slot="demo">
          <sg-rate disabled v-model="value3"></sg-rate>
        </div>
        <div slot="desc">
          <p>设置属性 disabled 开启只读模式，无法交互.</p>
        </div>
        <i-code lang="html" slot="code">{{ code.read }}</i-code>
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
          <td>star 总数</td>
          <td>Number</td>
          <td>5</td>
        </tr>
        <tr>
          <td>value</td>
          <td>当前 star 数，可以使用 v-model 双向绑定数据</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>allow-half</td>
          <td>是否允许半选</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否只读，无法进行交互</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-text</td>
          <td>是否显示提示文字</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        </tbody>
      </table>
      <Anchor title="events" h3></Anchor>
      <table>
        <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>返回值</th>
        </tr>
        </thead>
        <tbody>
         <tr>
           <td>on-change</td>
           <td>评分改变时触发</td>
           <td>value</td>
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
  import Code from '../code/rate';
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
        value:4,
        value1:2,
        value2:3,
        value3:2
      }
    }
  }
</script>
<style>
</style>
