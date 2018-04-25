let code = {};

code.tree = `
├─avatar
│      avatar.vue
│      index.js
│      
├─badge
│      badge.vue
│      index.js
│      
├─input
│      index.js
│      input.vue
│      
`;
code.example=`
    anchor.vue  ---标题组件，内含标题及锚点
    article.vue ---文章组件，内含文章主题以及目录
    code.vue    ---代码块组件
    demo.vue    ---组件示例，嵌套代码块组件
    menu.vue    ---组件库目录
    `;
code.anchor=`<Anchor title="UI团队组件库开发须知" h2></Anchor>`;
code.article=`import iArticle from ../components/article`;
code.code=`<i-code lang="html" slot="code">{{ code.icon }}</i-code>`;
code.demo=` <Demo title="基础用法">
      <div slot="demo">
        <sg-input v-model="value" placeholder="Enter something..." style="width: 300px"></sg-input>
      </div>
      <div slot="desc">
        <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。可以直接设置 style 来改变输入框的宽度，默认 100%。可自己设置宽度</p>
      </div>
      <i-code lang="html" slot="code">{{ code.base }}</i-code>
    </Demo>`;
code.input=`<template>
  <i-article>
  <article>
    <Anchor title="sg-input" h1></Anchor>
    <p class="bd-lead">基本表单组件，支持 sg-input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。</p>
    <Anchor title="代码示例" h2></Anchor>
    <Demo title="基础用法">
      <div slot="demo">
        <sg-input v-model="value" placeholder="Enter something..." style="width: 300px"></sg-input>
      </div>
      <div slot="desc">
        <p>基本用法，可以使用 <code>v-model</code> 实现数据的双向绑定。可以直接设置 style 来改变输入框的宽度，默认 100%。可自己设置宽度</p>
      </div>
      <i-code lang="html" slot="code">{{ code.base }}</i-code>
    </Demo>
    <Demo title="带Icon的输入框">
      <div slot="demo">
        <sg-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..."
                  style="width: 200px"></sg-input>
      </div>
      <div slot="desc">
        <p>通过 <code>icon</code> 属性可以在输入框右边加一个图标。</p>
        <p>点击图标，会触发 <code>on-click</code> 事件。</p>
      </div>
      <i-code lang="html" slot="code">{{ code.icon }}</i-code>
    </Demo>
    <Demo title="文本域">
      <div slot="demo">
        <sg-input v-model="value5" type="textarea" placeholder="Enter something..."></sg-input>
      </div>
      <div slot="desc">
        <p>通过设置属性 <code>type</code> 为 <code>textarea</code> 来使用文本域，用于多行输入。</p>
        <p>通过设置属性 <code>rows</code> 控制文本域默认显示的行数。</p>
      </div>
      <i-code lang="html" slot="code">{{ code.textarea }}</i-code>
    </Demo>
    <Demo title="禁用状态">
      <div slot="demo">
        <div class="mb-3">
          <sg-input v-model="value9" disabled placeholder="Enter something..."></sg-input>
        </div>
        <sg-input v-model="value10" disabled type="textarea" placeholder="Enter something..."></sg-input>
      </div>
      <div slot="desc">
        <p>通过添加<code>disabled</code>属性可设置为不可用状态。</p>
      </div>
      <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
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
        <td>on-enter</td>
        <td>按下回车键时触发</td>
        <td>无</td>
      </tr>
      <tr>
        <td>on-click</td>
        <td>设置 icon 属性后，点击图标时触发</td>
        <td>无</td>
      </tr>
      <tr>
        <td>on-change</td>
        <td>数据改变时触发</td>
        <td>event</td>
      </tr>
      <tr>
        <td>on-focus</td>
        <td>输入框聚焦时触发</td>
        <td>无</td>
      </tr>
      <tr>
        <td>on-blur</td>
        <td>输入框失去焦点时触发</td>
        <td>无</td>
      </tr>
      </tbody>
    </table>
    <Anchor title="slot" h3></Anchor>
    <table>
      <thead>
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>prepend</td>
        <td>前置内容，仅在 text 类型下有效</td>
      </tr>
      <tr>
        <td>append</td>
        <td>后置内容，仅在 text 类型下有效</td>
      </tr>
      </tbody>
    </table>
    <Anchor title="methods" h3></Anchor>
    <table>
      <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>focus</td>
        <td>手动聚焦输入框</td>
        <td>无</td>
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
    data() {
      return {
        code: Code,
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: '',
        value13: '',
        value14: 'Hello World',
        select1: 'http',
        select2: 'com',
        select3: 'day'
      }
    },
  }
</script>

`;
code.menu=`<router-link to="/input" tag="li" class="ready"><a>input、textare、搜索输入框</a></router-link>`

export default code;
