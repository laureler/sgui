<template>
  <div>
    <nav class="collapse bd-links" style="max-height: calc(100vh - 4rem)">
      <router-link to="/test" tag="a">开发须知</router-link>
      <div class="module-list">
        <p class="list-title">业务组件</p>
        <ul class="list-menu">
          <router-link to="/business" tag="li" class="ready"><a>测试组件</a></router-link>
          <router-link to="/configForm" tag="li" class="ready"><a>表单配置</a></router-link>
          <router-link to="/queryTable" tag="li" class="ready"><a>表格查询</a></router-link>
        </ul>
        <p class="list-title">基础组件 - 数据输入</p>
        <ul class="list-menu">
          <router-link to="/input" tag="li" class="ready"><a>input、textare、搜索输入框</a></router-link>
          <router-link to="/" tag="li"><a>富文本编辑</a></router-link>
          <router-link to="/" tag="li"><a>选择输入-时间、日期选择</a></router-link>
          <router-link to="/" tag="li"><a>选择输入-人员、地区选择</a></router-link>
          <router-link to="/" tag="li"><a>文件操作-文件上传</a></router-link>
          <router-link to="/preview" tag="li" class="ready"><a>图片预览</a></router-link>
          <router-link to="/pdfPreview" tag="li" class="ready"><a>PDF预览</a></router-link>
        </ul>
        <p class="list-title">基础组件 - 列表</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>任务列表</a></router-link>
          <router-link to="/" tag="li"><a>内容列表</a></router-link>
          <router-link to="/" tag="li"><a>卡片式列表</a></router-link>
          <router-link to="/" tag="li"><a>首字母排序</a></router-link>
          <router-link to="/" tag="li"><a>文件上传</a></router-link>
          <router-link to="/page" tag="li" class="ready"><a>分页</a></router-link>
        </ul>
        <p class="list-title">基础组件 - 表单控件</p>
        <ul class="list-menu">
          <router-link to="/radio" tag="li" class="ready"><a>单选框</a></router-link>
          <router-link to="/checkbox" tag="li" class="ready"><a>多选框</a></router-link>
          <router-link to="/" tag="li"><a>数字步增</a></router-link>
          <router-link to="/select" tag="li" class="ready"><a>select选择</a></router-link>
          <router-link to="/" tag="li"><a>滑块条</a></router-link>
          <router-link to="/" tag="li"><a>穿梭框</a></router-link>
          <router-link to="/button" tag="li" class="ready"><a>按钮</a></router-link>
          <router-link to="/" tag="li"><a>进度条</a></router-link>
          <router-link to="/form" tag="li" class="ready"><a>表单控件</a></router-link>
        </ul>
      </div>
      <div class="module-list">
        <p class="list-title">基础组件 - 导航类</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>导航菜单</a></router-link>
          <router-link to="/" tag="li"><a>步骤条</a></router-link>
          <router-link to="/" tag="li"><a>面包屑</a></router-link>
          <router-link to="/" tag="li"><a>步骤条（时间轴）</a></router-link>
          <router-link to="/tab" tag="li" class="ready"><a>tab切换</a></router-link>
          <router-link to="/" tag="li"><a>粘性头部</a></router-link>
          <router-link to="/collapse" tag="li" class="ready"><a>折叠面板</a></router-link>
        </ul>
        <p class="list-title">基础组件 - 图表类</p>
        <ul class="list-menu">
          <router-link to="/qrcode" tag="li" class="ready"><a>二维码</a></router-link>
          <router-link to="/magnifyGlass" tag="li" class="ready"><a>图片放大</a></router-link>
          <router-link to="/" tag="li"><a>图片缩略图</a></router-link>
          <router-link to="/" tag="li"><a>轮播图</a></router-link>
          <router-link to="/" tag="li"><a>echart</a></router-link>
          <router-link to="/table" tag="li" class="ready"><a>表格</a></router-link>
          <router-link to="/tree" tag="li" class="ready"><a>树控件</a></router-link>
        </ul>
        <p class="list-title">基础组件 - 其他</p>
        <ul class="list-menu">
          <router-link to="/avatar" tag="li" class="ready"><a>头像</a></router-link>
          <router-link to="/signet" tag="li" class="ready"><a>盖章</a></router-link>
          <router-link to="/badge" tag="li" class="ready"><a>标记badge</a></router-link>
          <router-link to="/rate" tag="li" class="ready"><a>评分</a></router-link>
        </ul>
      </div>
      <div class="module-list">
        <p class="list-title">组件服务 - 提示类</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>网络请求各种情况、浏览器提示</a></router-link>
          <router-link to="/" tag="li"><a>操作提示-message</a></router-link>
          <router-link to="/" tag="li"><a>操作提示-messagebox</a></router-link>
          <router-link to="/" tag="li"><a>操作提示-tooltip</a></router-link>
          <router-link to="/" tag="li"><a>操作提示-popover</a></router-link>
          <router-link to="/" tag="li"><a>通知</a></router-link>
        </ul>
        <p class="list-title">组件服务 - 表单操作</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>表单验证</a></router-link>
          <router-link to="/" tag="li"><a>自动补全</a></router-link>
        </ul>
        <p class="list-title">组件服务 - 文本类</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>多行文本省略</a></router-link>
          <router-link to="/" tag="li"><a>模糊提示</a></router-link>
        </ul>
        <p class="list-title">组件服务 - 工具库</p>
        <ul class="list-menu">
          <router-link to="/getBase64" tag="li" class="ready"><a>图片转base64</a></router-link>
          <router-link to="/formatDate" tag="li" class="ready"><a>日期格式化</a></router-link>
          <router-link to="/numFormat" tag="li" class="ready"><a>数字格式化</a></router-link>
          <router-link to="/parseQueryString" tag="li" class="ready"><a>url解析</a></router-link>
          <router-link to="/trim" tag="li" class="ready"><a>string处理（去除首尾空格）</a></router-link>
          <router-link to="/" tag="li"><a>多语言（i18n）</a></router-link>
          <router-link to="/" tag="li"><a>可拖拽</a></router-link>
        </ul>

      </div>
      <div class="module-list">
        <p class="list-title">uiScript</p>
        <ul class="list-menu">
          <router-link to="/uiscript" tag="li" class="ready"><a>uiScript使用文档</a></router-link>
        </ul>
        <p class="list-title">第三方插件</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>第三方插件推荐</a></router-link>
        </ul>
      </div>
      <div class="module-list">
        <p class="list-title">经典布局</p>
        <ul class="list-menu">
          <router-link to="/" tag="li"><a>门户</a></router-link>
          <router-link to="/" tag="li"><a>运维</a></router-link>
          <router-link to="/" tag="li"><a>移动端</a></router-link>
        </ul>
      </div>
      <div class="module-list">
        <p class="list-title">图标动画</p>
        <ul class="list-menu">
          <router-link to="/icon" tag="li" class="ready"><a>图标库</a></router-link>
          <router-link to="/" tag="li"><a>动画库</a></router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>
<style lang="less" scoped>
  .module-list {
    border-bottom: 1px solid #ccc;
    padding: 10px;
    .list-title {
      color: rgba(0, 0, 0, 0.85);
      font-size: 18px;
      margin:0;
    }
    .list-menu {
      padding:0;
      .ready{
        a{
          color: red;
        }
      }
      > li {
        padding:5px 0;
        list-style: none;
        a {
          color: rgba(0, 0, 0, 0.65);
          font-size: 13px;
          padding:0 15px;
        }
      }
    }
  }
</style>
<script>

</script>
