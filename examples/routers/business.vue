<style lang="less">
  .test-components {
    width: 100%;
    /*margin-top: 100px;*/
    .sg-form {
      border-top: 1px solid #ccc;
      display: flex;
      flex-wrap: wrap;
      box-sizing: border-box;
      .sg-form-item {
        border-bottom: 1px solid #ccc;
        &:nth-child(3n-1) {
          border-right: 1px solid #ccc;
          border-left: 1px solid #ccc;
        }
        width: 33.33%;
        margin: 0;
        .sg-form-item-label {
          margin: 0;
          border-right: 1px solid #ccc;
        }
        .sg-select-selection {
          border: none;
        }
        .sg-input {
          border: none;
        }
      }
    }
    .import {
      .sg-form-item-label {
        color: #bc2e2e;
      }
    }
    .sg-form-item-label {
      font-size: 14px;
      color: #444;
    }
    .sg-collapse-content {
      padding: 0;
    }
    .sg-collapse-content > .sg-collapse-content-box {
      padding: 0;
    }
    .sg-collapse > .sg-collapse-item > .sg-collapse-header {
      height: 65px;
      line-height: 1.5;
      padding: 0;
    }
  }
</style>
<template>
  <div>
    <i-article>
      <article>
        <Anchor title="sg-business" h1></Anchor>
        <p class="bd-lead">业务组件，权利人信息</p>
        <Anchor title="代码示例" h2></Anchor>
        <Demo title="基础用法">
          <div slot="demo">
            <sg-identity :data="test" class="test-components">
              <template slot-scope="props">
                <sg-form inline :label-width="120">
                  <sg-form-item label="权利人姓名">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="证件类型">
                    <sg-select value="身份证">
                      <Option value="身份证"></Option>
                      <Option value="军官证"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="证件号码" class="import">
                    <sg-input v-model="props.row.number"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="产权来源">
                    <sg-select value="无偿移交" disabled>
                      <Option value="无偿移交"></Option>
                      <Option value="有偿移交"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="权利人性质">
                    <sg-select value="企业">
                      <Option value="企业"></Option>
                      <Option value="个人"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="占有份额">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利面积">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利面积">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="联系人电话">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="是否持证人">
                    <sg-select value="是">
                      <Option value="是"></Option>
                      <Option value="否"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="法人代表">
                    <sg-input v-model="props.row.name" disabled></sg-input>
                  </sg-form-item>
                  <sg-form-item label="法人证件类型">
                    <sg-select value="身份证">
                      <Option value="身份证"></Option>
                      <Option value="军官证"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="法人证件号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="权利号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="证书编号">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人证件类型">
                    <sg-select value="组织机构代理">
                      <Option value="组织机构代理"></Option>
                    </sg-select>
                  </sg-form-item>
                  <sg-form-item label="代理人证件号码">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="代理人联系电话">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="备注">
                    <sg-input v-model="props.row.name"></sg-input>
                  </sg-form-item>
                  <sg-form-item label="">
                  </sg-form-item>
                </sg-form>
              </template>
            </sg-identity>
          </div>
          <i-code lang="html" slot="code">{{ code.bs }}</i-code>
        </Demo>
      </article>
    </i-article>
  </div>
</template>

<script>
  import SgIdentity from '../components/identity'
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/input';
  import Anchor from '../components/anchor.vue';

  export default {
    name: "business",
    data() {
      return {
        code:Code,
        test: [{
          name: '黄坚辉',
          identity: '123456788945894621',
          number: '123125156898954582',
        },]
      }
    },
    components: {SgIdentity, iArticle, iCode, Demo, Anchor}
  }
</script>

<style scoped>

</style>
