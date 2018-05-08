<template>
  <i-article>
    <article>
      <Anchor title="sg-preview" h1></Anchor>
      <p class="bd-lead">图片预览。</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-preview :imgList="item"></sg-preview>
        </div>
        <div slot="desc">
          <p>使用方法，将数据绑定到 <code>imgList</code></p>
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
          <td>imgList</td>
          <td>预览图片数据的json数据
          </td>
          <td>Array</td>
          <td>[ ]</td>
        </tr>
        <tr>
          <td>url</td>
          <td>主要（大）图像
          </td>
          <td>String</td>
          <td>空</td>
        </tr>
        <tr>
          <td>minurl</td>
          <td>小图像
          </td>
          <td>String</td>
          <td>空</td>
        </tr>
        <tr>
          <td>minurl</td>
          <td>小图像
          </td>
          <td>String</td>
          <td>空</td>
        </tr>
        <tr>
          <td>size</td>
          <td>图像显示尺寸（高度*宽度）
          </td>
          <td>String</td>
          <td>默认1024*1024（ 屏口尺寸大于1024时，取1024*1024；屏口尺寸小于1024时，取最大屏口尺寸）</td>
        </tr>
        <tr>
          <td>text</td>
          <td>图像描述信息
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
  import Code from '../code/preview';
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
        item: [
          {
            url: 'https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg',
            minurl: 'https://farm3.staticflickr.com/2567/5697107145_3c27ff3cd1_m.jpg',
            size: '1024x1024',  //预览时图片宽高（大于屏口宽度时为屏口宽度下的默认值）不传默认1024*1024（相当于最大）
            text: '图片1', //图片的文字信息，不传默认为空
            alt: '图片1'
          },
          {
            url: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            minurl: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg',
            size: '964x1024',
            text: '图片2', //图片的文字信息，不传默认为空
            alt: '图片2'
          }
        ]

      }
    }
  }
</script>


