<template>
  <i-article>
    <article>
      <Anchor title="折叠面板" h1></Anchor>
      <Anchor title="代码示例" h2>
      </Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-collapse v-model="value1">
            <sg-panel name="1">
              南方数码
              <p slot="content">南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码</p>
            </sg-panel>
            <sg-panel name="2">
              南方数码
              <p slot="content">南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码</p>
            </sg-panel>
            <sg-panel name="3">
              南方数码
              <p slot="content">
                南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码南方数码</p>
            </sg-panel>
          </sg-collapse>
        </div>
      </Demo>
    </article>
  </i-article>
</template>

<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Anchor from '../components/anchor.vue';

  export default {
    name: "collapse",
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data() {
      return {
        value1: '1'
      }
    }
  }
</script>

<style scoped>

</style>
