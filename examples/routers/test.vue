<template>
  <i-article>
    <article style="margin-top: 25px;">
      <Anchor title="UI团队组件库开发须知" h3></Anchor>
      <code>在已开发或者开发中的菜单组件中加类名</code>
      <i-code>{{code.menu}}</i-code>
      <p>组件开发目录为<code>src</code>，所有组件应以文件夹方式建立，文件夹包含组件模板，模块入口文件，示例如下</p>
      <i-code>{{ code.tree }}</i-code>
      <p>示例（说明）文档<code>examples</code>，包含文档组件如下</p>
      <i-code>{{code.example}}</i-code>
      <code>以下为组件库示例（说明）文档组件说明，请按照规范</code>
      <Demo title="anchor组件">
        <div slot="desc">
          通过传入标题及标题型号，可生成标题和锚点，用法如下
        </div>
        <i-code lang="html" slot="code">{{ code.anchor }}</i-code>
      </Demo>
      <Demo title="article组件">
        <div slot="desc">
          包含在组件说明最外层，包含目录以及文章主体。
        </div>
        <i-code lang="html" slot="code">{{ code.article }}</i-code>
      </Demo>
      <Demo title="code组件">
        <div slot="desc">
          代码块组件，在<code>code</code>目录中定义代码块脚本，在组件中引入，<code>注意！</code>，如果不配合demo组件使用，请去除卡槽<code>slot</code>
        </div>
        <i-code lang="html" slot="code">{{ code.code }}</i-code>
      </Demo>
      <Demo title="demo组件">
        <div slot="desc">
          组件，将自动生成示例标题，卡槽<code>desc</code>为组件示例说明，卡槽<code>demo</code>为组件示例，卡槽<code>code</code>为组件示例代码，内置代码高亮以及复制功能
        </div>
        <i-code lang="html" slot="code">{{ code.demo }}</i-code>
      </Demo>
      <p>最后，以input组件示例说明</p>
      <i-code>{{code.input}}</i-code>
    </article>
  </i-article>
</template>

<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/test';
  import Anchor from '../components/anchor.vue';

  export default {
    name: "test",
    data() {
      return {
        code: Code
      }
    },
    components: {
      iArticle, iCode, Demo, Anchor
    },
    mounted() {
      console.log(this.code)
    }
  }
</script>

<style scoped>

</style>
