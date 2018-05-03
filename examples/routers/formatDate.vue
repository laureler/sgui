<template>
  <div class="demo">
    <i-article>
    <article>
    <Anchor title="日期格式化" h1></Anchor>
    <p class="bd-lead"></p>
    <Anchor title="代码示例" h2></Anchor>
    <slot name="desc"></slot>
    <Demo title="基础用法">
        <div slot="demo" >
            传入时间：{{date}}
            <br>
            返回：{{result}}
            <br>
            使用方法：
          <i-code>
                 uiScript.formatDate(now,symbol)
                data(){
                    return {
                        date:new Date(),
                        result:'',
                    }
                },
                mounted(){
                    this.result=uiScript.formatDate(this.date,'-')
                }
                
          </i-code>
        </div>
      <div slot="desc">
        
      </div>
      <i-code lang="html" slot="code">
          
      </i-code>
    </Demo>
     <Anchor title="参数说明" h2></Anchor>
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
        <td>now </td>
        <td>传入的时间对象 
        </td>
        <td>date</td>
        <td>空</td>
      </tr>
      <tr>
        <td>symbol </td>
        <td>分隔符</td>
        <td>String</td>
        <td>空</td>
      </tr>
     
     </tbody>
    </table>
       </article>
  </i-article>
  </div>
</template>


<script>
  import iArticle from '../components/article'
  import iCode from '../components/code';
  import Demo from '../components/demo.vue';
  import Anchor from '../components/anchor.vue';
  import uiScript from '../../src/script/uiScript'   
  export default {
    components: {
      iCode,
      Demo,
      iArticle,
      Anchor
    },
    data(){
      return {
          date:new Date(),
          result:'',
      }
    },
    mounted(){
        this.result=uiScript.formatDate(this.date,'-')
    }
   
  }
</script>

<style scoped>
#glassTest{
    width:578px;
    height:326px;
}
</style>