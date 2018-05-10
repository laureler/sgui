<template>
    <i-article>
    <article>
        <Anchor title="sg-page" h1></Anchor>
        <p class="bd-lead">当数据量较多时，使用分页可以快速进行数据切换。</p>
        <Anchor title="代码示例" h2></Anchor>
        
        <Demo title="基础版">
            <div slot="demo">
                <div style="margin:10px 0px">
                    <sg-page :total="1000"  show-sizer show-elevator show-total transfer :current="12"></sg-page>
                </div>
            </div>
        </Demo>
        <i-code lang="html" slot="code">{{ code.base1 }}</i-code>
        <Demo title="迷你版">
            <div slot="demo">
                <div style="margin:10px 0px">
                    <sg-page :total="1000"  size="small"  show-sizer show-elevator show-total transfer :current="12"></sg-page>
                </div>
            </div>
        </Demo>
        <i-code lang="html" slot="code">{{ code.base2 }}</i-code>
        <Demo title="简洁版">
            <div slot="demo">
                <div style="margin:10px 0px">
                    <sg-page :current="2" :total="50" simple></sg-page>
                </div>
            </div>
        </Demo>
        <i-code lang="html" slot="code">{{ code.base3 }}</i-code>
        <Anchor title="API" h2></Anchor>
        <Anchor title="page props" h3></Anchor>
        <table class="doc-table">
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
                    <td>current</td>
                    <td>
                        当前页码，支持 .sync 修饰符
                    </td>
                    <td>Number</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>total</td>
                    <td>数据总数</td>
                    <td>Number</td>
                    <td>0</td>
                </tr>
                <tr>
                    <td>page-size</td>
                    <td>每页条数</td>
                    <td>Number</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>page-size-opts</td>
                    <td>每页条数切换的配置</td>
                    <td>Array</td>
                    <td>[10, 20, 30, 40]</td>
                </tr>
                <tr>
                    <td>placement</td>
                    <td>条数切换弹窗的展开方向，可选值为 <code>bottom</code> 和 <code>top</code></td>
                    <td>String</td>
                    <td>bottom</td>
                </tr>
                <tr>
                    <td>size</td>
                    <td>可选值为<code>small</code>（迷你版）或不填（默认）</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>simple</td>
                    <td>简洁版</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-total</td>
                    <td>显示总数</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-elevator</td>
                    <td>显示电梯，可以快速切换到某一页</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>show-sizer</td>
                    <td>显示分页，用来改变<code>page-size</code></td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>class-name</td>
                    <td>自定义 class 名称</td>
                    <td>String</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>style</td>
                    <td>自定义 style 样式</td>
                    <td>Object</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>transfer</td>
                    <td>是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果</td>
                    <td>Boolean</td>
                    <td>false</td>
                </tr>
            </tbody>
        </table>
        <Anchor title="page events" h3></Anchor>
        <table class="doc-table">
            <thead>
                <tr>
                    <th>事件名</th>
                    <th>说明</th>
                    <th>返回值</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>on-change</td>
                    <td>页码改变的回调，返回改变后的页码</td>
                    <td>页码</td>
                </tr>
                <tr>
                    <td>on-page-size-change</td>
                    <td>切换每页条数时的回调，返回切换后的每页条数</td>
                    <td>page-size</td>
                </tr>
            </tbody>
        </table>
        <Anchor title="page slot" h3></Anchor>
        <table class="doc-table">
            <thead>
                <tr>
                    <th>名称</th>
                    <th>说明</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>无</td>
                    <td>自定义显示总数的内容</td>
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
import Anchor from '../components/anchor.vue';
import Code from '../code/page';
export default {
	components:{
		iCode,
        Demo,
        iArticle,
        Anchor,
        Code,
	},
    data () {
        return {
            code: Code,
        }
    },
    methods: {

    }
}
</script>
<style>
    .highlight {
        margin-top: 0;
    }
</style>


