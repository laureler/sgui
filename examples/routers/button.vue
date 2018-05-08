<template>
  <i-article>
    <article>
      <Anchor title="sg-button 按钮" h1></Anchor>
      <p class="bd-lead">基本组件，触发业务逻辑时使用</p>
      <Anchor title="代码示例" h2></Anchor>
      <Demo title="按钮类型">
        <div slot="desc">
          <p>按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。</p>
          <p>通过设置<code>type</code>为<code>primary</code>、<code>ghost</code>、<code>dashed</code>、<code>text</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>error</code>创建不同样式的按钮，不设置为默认样式。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.type }}</i-code>
        <div slot="demo">
          <sg-button>Default</sg-button>
          <sg-button type="primary">Primary</sg-button>
          <sg-button type="ghost">Ghost</sg-button>
          <sg-button type="dashed">Dashed</sg-button>
          <sg-button type="text">Text</sg-button>
          <br><br>
          <sg-button type="info">Info</sg-button>
          <sg-button type="success">Success</sg-button>
          <sg-button type="warning">Warning</sg-button>
          <sg-button type="error">Error</sg-button>
        </div>
      </Demo>
      <Demo title="图标按钮及按钮形状">
        <div slot="demo">
          <sg-button type="primary" shape="circle" icon="ios-search"></sg-button>
          <sg-button type="primary" icon="ios-search">Search</sg-button>
          <sg-button type="primary" shape="circle" icon="ios-search">Search</sg-button>
          <sg-button type="primary" shape="circle">Circle</sg-button>
          <br><br>
          <sg-button type="ghost" shape="circle" icon="ios-search"></sg-button>
          <sg-button type="ghost" icon="ios-search">Search</sg-button>
          <sg-button type="ghost" shape="circle" icon="ios-search">Search</sg-button>
          <sg-button type="ghost" shape="circle">Circle</sg-button>
        </div>
        <div slot="desc">
          <p>通过设置<code>icon</code>属性在<code>Button</code>内嵌入一个<code>Icon</code>，或者直接在<code>Button</code>内使用<code>Icon</code>组件。</p>
          <p>使用<code>Button</code>的<code>icon</code>属性，图标位置将在最左边，如果需要自定义位置，需使用<code>Icon</code>组件。</p>
          <p>通过设置<code>shape</code>属性为<code>circle</code>，可将按钮置为圆的形状。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.icon }}</i-code>
      </Demo>
      <Demo title="按钮尺寸">
        <div slot="demo">
          <sg-button type="primary" size="large">Large</sg-button>
          <sg-button type="primary">Default</sg-button>
          <sg-button type="primary" size="small">Small</sg-button>
          <br><br>
          <sg-button type="primary" shape="circle" size="large">Large</sg-button>
          <sg-button type="primary" shape="circle">Default</sg-button>
          <sg-button type="primary" shape="circle" size="small">Small</sg-button>
        </div>
        <div slot="desc">
          <p>按钮有三种尺寸：大、默认（中）、小</p>
          <p>通过设置<code>size</code>为<code>large</code>和<code>small</code>将按钮设置为大和小尺寸，不设置为默认（中）尺寸。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.size }}</i-code>
      </Demo>
      <Demo title="长按钮">
        <div slot="demo">
          <sg-button type="success" long>SUBMIT</sg-button>
          <br><br>
          <sg-button type="error" long>DELETE</sg-button>
        </div>
        <div slot="desc">
          <p>通过设置属性 <code>long</code> 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。</p>
          <p>使用者也可以直接通过给组件添加 <code>style</code> 来设置更细节的样式，比如定宽。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.long }}</i-code>
      </Demo>
      <Demo title="不可用状态">
        <div slot="demo">
          <sg-button>Default</sg-button>
          <sg-button disabled>Default(Disabled)</sg-button>
          <br><br>
          <sg-button type="primary">Primary</sg-button>
          <sg-button type="primary" disabled>Primary(Disabled)</sg-button>
          <br><br>
          <sg-button type="ghost">Ghost</sg-button>
          <sg-button type="ghost" disabled>Ghost(Disabled)</sg-button>
          <br><br>
          <sg-button type="dashed">Dashed</sg-button>
          <sg-button type="dashed" disabled>Dashed(Disabled)</sg-button>
          <br><br>
          <sg-button type="text">Text</sg-button>
          <sg-button type="text" disabled>Text(Disabled)</sg-button>
        </div>
        <div slot="desc">
          <p>通过添加<code>disabled</code>属性可将按钮设置为不可用状态。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.disabled }}</i-code>
      </Demo>
      <Demo title="加载中状态">
        <div slot="demo">
          <sg-button type="primary" loading>Loading...</sg-button>
          <sg-button type="primary" :loading="loading" @click="toLoading">
            <span v-if="!loading">Click me!</span>
            <span v-else>Loading...</span>
          </sg-button>
          <sg-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
            <span v-if="!loading2">Click me!</span>
            <span v-else>Loading...</span>
          </sg-button>
        </div>
        <div slot="desc">
          <p>通过添加<code>loading</code>属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.loading }}</i-code>
      </Demo>
      <Demo title="按钮组合">
        <div slot="demo">
          <h4>Basic</h4>
          <br><br>
          <sg-button-group>
            <sg-button>Cancel</sg-button>
            <sg-button type="primary">Confirm</sg-button>
          </sg-button-group>
          <sg-button-group>
            <sg-button disabled>Yesterday</sg-button>
            <sg-button disabled>Today</sg-button>
            <sg-button disabled>Tomorrow</sg-button>
          </sg-button-group>
          <sg-button-group>
            <sg-button type="primary">L</sg-button>
            <sg-button>M</sg-button>
            <sg-button type="ghost">M</sg-button>
            <sg-button type="dashed">R</sg-button>
          </sg-button-group>
          <br><br>
          <h4>Icons</h4>
          <br><br>
          <sg-button-group>
            <sg-button type="primary">
              <!--<Icon type="chevron-left"></Icon>-->
              Backward
            </sg-button>
            <sg-button type="primary">
              Forward
              <!--<Icon type="chevron-right"></Icon>-->
            </sg-button>
          </sg-button-group>
          <sg-button-group>
            <sg-button type="primary" icon="ios-skipbackward"></sg-button>
            <sg-button type="primary" icon="ios-skipforward"></sg-button>
          </sg-button-group>
          <sg-button-group>
            <sg-button type="ghost" icon="ios-color-wand-outline"></sg-button>
            <sg-button type="ghost" icon="ios-sunny-outline"></sg-button>
            <sg-button type="ghost" icon="ios-crop"></sg-button>
            <sg-button type="ghost" icon="ios-color-filter-outline"></sg-button>
          </sg-button-group>
          <br><br>
          <h4>Circle</h4>
          <br><br>
          <sg-button-group shape="circle">
            <sg-button type="primary">
              <!--<Icon type="chevron-left"></Icon>-->
              Backward
            </sg-button>
            <sg-button type="primary">
              Forward
              <!--<Icon type="chevron-right"></Icon>-->
            </sg-button>
          </sg-button-group>
          <sg-button-group shape="circle">
            <sg-button type="primary" icon="ios-skipbackward"></sg-button>
            <sg-button type="primary" icon="ios-skipforward"></sg-button>
          </sg-button-group>
          <sg-button-group shape="circle">
            <sg-button type="ghost" icon="ios-color-wand-outline"></sg-button>
            <sg-button type="ghost" icon="ios-sunny-outline"></sg-button>
            <sg-button type="ghost" icon="ios-crop"></sg-button>
            <sg-button type="ghost" icon="ios-color-filter-outline"></sg-button>
          </sg-button-group>
          <br><br>
          <h4>Size</h4>
          <br><br>
          <sg-button-group size="large">
            <sg-button type="ghost">Large</sg-button>
            <sg-button type="ghost">Large</sg-button>
          </sg-button-group>
          <sg-button-group>
            <sg-button type="ghost">Default</sg-button>
            <sg-button type="ghost">Default</sg-button>
          </sg-button-group>
          <sg-button-group size="small">
            <sg-button type="ghost">Small</sg-button>
            <sg-button type="ghost">Small</sg-button>
          </sg-button-group>
          <br><br>
          <sg-button-group size="large" shape="circle">
            <sg-button type="ghost">Large</sg-button>
            <sg-button type="ghost">Large</sg-button>
          </sg-button-group>
          <sg-button-group shape="circle">
            <sg-button type="ghost">Default</sg-button>
            <sg-button type="ghost">Default</sg-button>
          </sg-button-group>
          <sg-button-group size="small" shape="circle">
            <sg-button type="ghost">Small</sg-button>
            <sg-button type="ghost">Small</sg-button>
          </sg-button-group>
        </div>
        <div slot="desc">
          <p>将多个<code>Button</code>放入<code>ButtonGroup</code>内，可实现按钮组合的效果。</p>
          <p>通过设置<code>ButtonGroup</code>的属性<code>size</code>为<code>large</code>和<code>small</code>，可将按钮组尺寸设置为大和小，不设置<code>size</code>，则为默认（中）尺寸。</p>
          <p>通过设置<code>ButtonGroup</code>的属性<code>shape</code>为<code>circle</code>，可将按钮组形状设置为圆角。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.group }}</i-code>
      </Demo>
      <Demo title="按钮组纵向排列">
        <div slot="demo">
          <sg-button-group vertical>
            <sg-button type="ghost" icon="social-facebook"></sg-button>
            <sg-button type="ghost" icon="social-twitter"></sg-button>
            <sg-button type="ghost" icon="social-googleplus"></sg-button>
            <sg-button type="ghost" icon="social-tumblr"></sg-button>
          </sg-button-group>
        </div>
        <div slot="desc">
          <p>通过设置<code>ButtonGroup</code>的属性<code>vertical</code>，可以使按钮组纵向排列。</p>
        </div>
        <i-code lang="html" slot="code">{{ code.vertical }}</i-code>
      </Demo>

    </article>
  </i-article>
</template>

<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Code from '../code/button';
  import Anchor from '../components/anchor.vue';

  export default {
    name: "button",
    data() {
      return {
        code: Code,
        loading: false,
        loading2: false
      }
    },
    methods: {
      toLoading () {
        this.loading = true;
      },
      toLoading2 () {
        this.loading2 = true;
      }
    },
    components: {iArticle, iCode, Demo, Anchor}
  }
</script>

<style scoped>

</style>
