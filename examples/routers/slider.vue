<template>
  <i-article>
    <article>
      <h1>sg-slider滑块</h1>
      <Anchor title="概述" h2></Anchor>
      <p >滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <Sg-slider v-model="value"></Sg-slider>
          <Sg-slider range  v-model="value1"></Sg-slider>
          <Sg-slider  range disabled v-model="value2"></Sg-slider>
        </div>
        <div slot="desc">
          <p>滑块的基本用法，可以使用 v-model 双向绑定数据。

            通过设置属性 range 开启双滑块，通过设置属性 disabled 禁用滑块。

            注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.base }}</i-code>
      </Demo>
      <Demo title="离散值">
        <div slot="demo">
          <Sg-slider v-model="value3" :step="10"></Sg-slider>
          <Sg-slider v-model="value4" :step="10" range></Sg-slider>
        </div>
        <div slot="desc">
          <p>通过设置属性 step 可以控制每次滑动的间隔。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.disperse }}</i-code>
      </Demo>
      <Demo title="显示间断点">
        <div slot="demo">
          <Sg-slider v-model="value5" :step="10" show-stops></Sg-slider>
          <Sg-slider v-model="value6" :step="10"  show-stops range></Sg-slider>
        </div>
        <div slot="desc">
          <p>通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.dot }}</i-code>
      </Demo>
      <Demo title="带有输入框 ">
        <div slot="demo">
          <Sg-slider v-model="value7" show-input></Sg-slider>
        </div>
        <div slot="desc">
          <p>通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.input }}</i-code>
      </Demo>
      <Demo title="自定义提示">
        <div slot="demo">
          <Sg-slider v-model="value8" :tip-format="format"></Sg-slider>
          <Sg-slider v-model="value9" :tip-format="hideFormat"></Sg-slider>
        </div>
        <div slot="desc">
          <p>Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。</p>
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
          <td>max</td>
          <td>最大值</td>
          <td>Number</td>
          <td>100</td>
        </tr>
        <tr>
          <td>min</td>
          <td>最小值</td>
          <td>Number</td>
          <td>0</td>
        </tr>
        <tr>
          <td>value</td>
          <td>滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字</td>
          <td>Number | Array</td>
          <td>0</td>
        </tr>
        <tr>
          <td>step</td>
          <td>步长，取值建议能被（max - min）整除</td>
          <td>Number</td>
          <td>1</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>是否禁用滑块</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>range</td>
          <td>是否开启双滑块模式</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-input</td>
          <td>是否显示数字输入框，仅在单滑块模式下有效</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>
        <tr>
          <td>show-stops</td>
          <td>是否显示间断点，建议在 step 不密集时使用</td>
          <td>Boolean</td>
          <td>false</td>
        </tr>

        <tr>
          <td>show-tip</td>
          <td>提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见）</td>
          <td>String</td>
          <td>hover</td>
        </tr>
        <tr>
          <td>tip-format</td>
          <td>Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip</td>
          <td>Function</td>
          <td>value</td>
        </tr>
        <tr>
          <td>input-size</td>
          <td>数字输入框的尺寸，可选值为large、small、default或者不填，仅在开启 show-input 时有效</td>
          <td>String</td>
          <td>default</td>
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
          <td>在松开滑动时触发，返回当前的选值，在滑动过程中不会触发</td>
          <td>value</td>
        </tr>
        <tr>
          <td>on-input</td>
          <td>滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发</td>
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
  import Code from '../code/slider';
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
        value1:[20,50],
        value2:[20,50],
        value3:30,
        value4:[20,50],
        value5:4,
        value6:[20,50],
        value7:8,
        value8:8,
        value9:8,
        value10:8,
      }
    },
    methods:{
      format (val) {
        return 'Progress: ' + val + '%';
      },
      hideFormat () {
        return null;
      }
    }
  }
</script>
<style>
</style>
