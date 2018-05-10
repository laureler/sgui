
<template>
  <i-article>
    <article>
      <h1>sg-radio 单选框</h1>
      <Anchor title="概述" h2></Anchor>
      <p>基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="单独使用">
        <div slot="demo">
          <sg-radio v-model="single">sg-radio</sg-radio>
          <p class="demo-data">{{ single }}</p>
        </div>
        <div slot="desc">
          <p>使用 v-model 可以双向绑定数据。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.single }}</i-code>
      </Demo>
      <Demo title="组合使用">
        <div slot="demo">
          <sg-radioGroup v-model="phone">
            <sg-radio label="apple">
              <!--<Icon type="social-apple"></Icon>-->
              <span>Apple</span>
            </sg-radio>
            <sg-radio label="android">
              <!--<Icon type="social-android"></Icon>-->
              <span>Android</span>
            </sg-radio>
            <sg-radio label="windows">
              <!--<Icon type="social-windows"></Icon>-->
              <span>Windows</span>
            </sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ phone }}</p>
          <sg-radioGroup v-model="animal">
            <sg-radio label="金斑蝶"></sg-radio>
            <sg-radio label="爪哇犀牛"></sg-radio>
            <sg-radio label="印度黑羚"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ animal }}</p>
        </div>
        <div slot="desc">
          <p>使用<code>sg-radioGroup</code>实现一组互斥的选项组。在组合使用时，<code>sg-radio</code> 使用 <code>label</code> 来自动判断。每个 sg-radio 的内容可以自定义，如不填写则默认使用 label 的值。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.group }}</i-code>
      </Demo>
      <Demo title="不可用">
        <div slot="demo">
          <sg-radio v-model="disabledSingle" disabled>sg-radio</sg-radio>
          <p class="demo-data">{{ disabledSingle }}</p>
          <sg-radioGroup v-model="disabledGroup">
            <sg-radio label="金斑蝶" disabled></sg-radio>
            <sg-radio label="爪哇犀牛"></sg-radio>
            <sg-radio label="印度黑羚"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ disabledGroup }}</p>
        </div>
        <div slot="desc">
          <p>通过设置<code>disabled</code>属性来禁用单选框。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
      </Demo>
      <Demo title="垂直">
        <div slot="demo">
          <sg-radioGroup v-model="vertical" vertical>
            <sg-radio label="apple">
              <!--<Icon type="social-apple"></Icon>-->
              <span>Apple</span>
            </sg-radio>
            <sg-radio label="android">
              <!--<Icon type="social-android"></Icon>-->
              <span>Android</span>
            </sg-radio>
            <sg-radio label="windows">
              <!--<Icon type="social-windows"></Icon>-->
              <span>Windows</span>
            </sg-radio>
          </sg-radioGroup>
        </div>
        <div slot="desc">
          <p>设置属性 <code>vertical</code> 可以垂直显示，按钮样式下无效。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
      </Demo>
      <Demo title="按钮样式">
        <div slot="demo">
          <sg-radioGroup v-model="button1" type="button">
            <sg-radio label="北京"></sg-radio>
            <sg-radio label="上海"></sg-radio>
            <sg-radio label="深圳"></sg-radio>
            <sg-radio label="杭州"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button1 }}</p>
          <sg-radioGroup v-model="button2" type="button">
            <sg-radio label="北京"></sg-radio>
            <sg-radio label="上海" disabled></sg-radio>
            <sg-radio label="深圳"></sg-radio>
            <sg-radio label="杭州"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button2 }}</p>
          <sg-radioGroup v-model="button3" type="button">
            <sg-radio label="北京" disabled></sg-radio>
            <sg-radio label="上海" disabled></sg-radio>
            <sg-radio label="深圳" disabled></sg-radio>
            <sg-radio label="杭州" disabled></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button3 }}</p>
        </div>
        <div slot="desc">
          <p>组合使用时可以设置属性<code>type</code>为 button 来应用按钮的样式。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.button }}</i-code>
      </Demo>
      <Demo title="尺寸">
        <div slot="demo">
          <sg-radioGroup v-model="button4" type="button" size="large">
            <sg-radio label="北京"></sg-radio>
            <sg-radio label="上海"></sg-radio>
            <sg-radio label="深圳"></sg-radio>
            <sg-radio label="杭州"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button4 }}</p>
          <sg-radioGroup v-model="button5" type="button">
            <sg-radio label="北京"></sg-radio>
            <sg-radio label="上海"></sg-radio>
            <sg-radio label="深圳"></sg-radio>
            <sg-radio label="杭州"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button5 }}</p>
          <sg-radioGroup v-model="button6" type="button" size="small">
            <sg-radio label="北京"></sg-radio>
            <sg-radio label="上海"></sg-radio>
            <sg-radio label="深圳"></sg-radio>
            <sg-radio label="杭州"></sg-radio>
          </sg-radioGroup>
          <p class="demo-data">{{ button6 }}</p>
        </div>
        <div slot="desc">
          <p>通过设置属性<code>size</code>为<code>large</code>或<code>small</code>将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.size }}</i-code>
      </Demo>

      <div class="api">
        <Anchor title="API" h2></Anchor>
        <Anchor title="sg-radio props" h3></Anchor>
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
            <td>value</td>
            <td>只在单独使用时有效。可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>label </td>
            <td>只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目</td>
            <td>String | Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用当前项</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>size</td>
            <td>单选框的尺寸，可选值为 <code>large</code>、<code>small</code>、<code>default</code> 或者不设置</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>true-value</td>
            <td>选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
            <td>String, Number, Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>false-value</td>
            <td>没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用</td>
            <td>String, Number, Boolean</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
        <Anchor title="sg-radio events" h3></Anchor>
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
            <td>在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发</td>
            <td>...</td>
          </tr>
          </tbody>
        </table>
        <Anchor title="sg-radioGroup props" h3></Anchor>
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
            <td>value</td>
            <td>指定当前选中的项目数据。可以使用 <code>v-model</code> 双向绑定数据</td>
            <td>String | Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>可选值为 button 或不填，为 button 时使用按钮样式</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>size</td>
            <td>尺寸，可选值为<code>large</code>、<code>small</code>、<code>default</code>或者不设置</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>vertical</td>
            <td>是否垂直排列，按钮样式下无效</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          </tbody>
        </table>
        <Anchor title="sg-radioGroup events" h3></Anchor>
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
            <td>在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发</td>
            <td>...</td>
          </tr>
          </tbody>
        </table>
      </div>
    </article>
  </i-article>
</template>
<script>
  import iArticle from '../components/article.vue';
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/radio';
  import Anchor from '../components/anchor.vue';

  export default {
    components: {
      iArticle,
      iCode,
      Demo,
      Anchor
    },
    data () {
      return {
        code: Code,
        single: false,
        phone: 'apple',
        animal: '爪哇犀牛',
        disabledSingle: true,
        disabledGroup: '爪哇犀牛',
        vertical: 'apple',
        button1: '北京',
        button2: '北京',
        button3: '北京',
        button4: '北京',
        button5: '北京',
        button6: '北京'
      }
    },
    methods: {

    }
  }
</script>
