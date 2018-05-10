<template>
  <i-article>
    <article>
      <Anchor title="表格" h1></Anchor>
      <Anchor title="代码示例" h2>
      </Anchor>
      <Demo title="基础用法">
        <div slot="demo">
          <sg-table
            :data="tableData"
            border
            style="width: 100%">
            <sg-table-column
              prop="date"
              label="日期"
              width="180">
            </sg-table-column>
            <sg-table-column
              prop="name"
              label="公司"
              width="180">
            </sg-table-column>
            <sg-table-column
              prop="address"
              label="公司">
            </sg-table-column>
          </sg-table>
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
    name: "table",
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data(){
      return{
        tableData: [{
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }, {
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }, {
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }, {
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }, {
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }, {
          date: '2016-05-02',
          name: '南方数码',
          address: '南方数码南方数码南方数码南方数码南方数码南方数码南方数码'
        }]
      }
    },

  }
</script>

<style scoped>

</style>
