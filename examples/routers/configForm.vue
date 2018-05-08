<template>
  <i-article>
    <article>
      <Anchor title="sg-configForm" h1></Anchor>
      <p class="bd-lead">业务组件，基础表单配置</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="基础用法">
        <div class="configForm" slot="demo">
          <sg-form :label-width="100">
            <sg-form-item label="表单名称">
              <sg-input value="测试表单"></sg-input>
            </sg-form-item>
            <sg-form-item label="权限ID">
              <sg-input style="width: 198px;" value="权限id"></sg-input>
              <span class="tips">多个权限用;号隔开。(多个只须满足一个)</span>
            </sg-form-item>
            <sg-form-item label="查询配置">
              <sg-select value="配置一">
                <Option value="配置一">配置一</Option>
                <Option value="配置二">配置二</Option>
                <Option value="配置三">配置三</Option>
              </sg-select>
            </sg-form-item>
            <sg-form-item label="查询参数">
              <sg-input value="这是查询参数"></sg-input>
            </sg-form-item>
            <sg-form-item label="备注">
              <sg-input value="无"></sg-input>
              <SgCheckboxGroup v-model="config">
                <SgCheckbox label="自动加载编辑配置"></SgCheckbox>
                <SgCheckbox label="匿名查询"></SgCheckbox>
                <SgCheckbox label="不启动事务"></SgCheckbox>
              </SgCheckboxGroup>
            </sg-form-item>
            <sg-form-item label="数据源">
              <sg-input type="textarea" :rows="4" value="数据源不知道从哪里来"></sg-input>
            </sg-form-item>
            <sg-form-item>
              <sg-button type="success" style="width: 100px;">保存</sg-button>
              <sg-button type="primary" style="width: 100px;margin-left: 52px;">预览</sg-button>
            </sg-form-item>
          </sg-form>
        </div>
      </Demo>
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
    name: "configFrom",
    data() {
      return {
        config: ['匿名查询'],
        code: Code
      }
    },
    components: {iArticle, iCode, Demo, Anchor}
  }
</script>

<style scoped lang="less">
  .configForm {
    width: 520px;
    margin: 52px auto;
    .tips {
      color: red;
    }
  }
</style>
