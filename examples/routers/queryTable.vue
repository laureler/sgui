<style lang="less">
  .querytable {
    .sg-form-item {
      margin-bottom: 15px;
      margin-right: 0;
    }
  }
</style>
<template>
  <i-article>
    <article>
      <Anchor title="sg-business" h1></Anchor>
      <p class="bd-lead">业务组件，表格查询</p>
      <Anchor title="代码示例" h2></Anchor>
        <div slot="demo">
          <div class="querytable">
            <sg-form inline :label-width="80">
              <sg-form-item label="不动产证号">
                <sg-input></sg-input>
              </sg-form-item>
              <sg-form-item label="登记编号">
                <sg-input></sg-input>
              </sg-form-item>
              <sg-form-item label="产权人姓名">
                <sg-input></sg-input>
              </sg-form-item>
              <sg-form-item label="证件号码">
                <sg-input></sg-input>
              </sg-form-item>
              <sg-button type="primary" icon="ios-search">查询</sg-button>
            </sg-form>
            <sg-table
              :data="tableData"
              border
              style="width: 100%">
              <sg-table-column
                prop="date"
                label="序号"
                width="100">
              </sg-table-column>
              <sg-table-column
                prop="name"
                label="登记编号"
                width="100">
              </sg-table-column>
              <sg-table-column
                prop="address"
                label="业务名称">
              </sg-table-column>
              <sg-table-column
                prop="address"
                label="产权人">
              </sg-table-column>
              <sg-table-column
                prop="address"
                label="不动产权证号">
              </sg-table-column>
              <sg-table-column
                prop="address"
                label="业务状态">
              </sg-table-column>
            </sg-table>
          </div>
        </div>
    </article>
  </i-article>
</template>

<script>
  import SgIdentity from '../components/identity'
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/input';
  import Anchor from '../components/anchor.vue';

  export default {
    name: "queryTable",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    components: {SgIdentity, iArticle, iCode, Demo, Anchor}
  }
</script>

<style scoped>

</style>
