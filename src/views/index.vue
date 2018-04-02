<template>
	<div class="index">
		<div class="content">
			<div class="left-pane">
				<p class="title">SGUI组件库</p>
				<div class="module-wrap">
					<div class="module-list">
						<p class="list-title">基础组件 - 数据输入</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>input、textare、搜索输入框</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>富文本编辑</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>选择输入-时间、日期选择</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>选择输入-人员、地区选择</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>文件操作-文件上传</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>文件操作-常用文件预览、下载</a></router-link> 
						</ul>
						<p class="list-title">基础组件 - 列表</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>任务列表</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>内容列表</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>卡片式列表</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>首字母排序</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>文件上传</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>分页</a></router-link> 
						</ul>
						<p class="list-title">基础组件 - 表单控件</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>单选框</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>多选框</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>数字步增</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>select选择</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>滑块条</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>穿梭框</a></router-link> 
						</ul>
					</div>
					<div class="module-list">
						<p class="list-title">基础组件 - 导航类</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>导航菜单</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>步骤条</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>面包屑</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>步骤条（时间轴）</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>tab切换</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>粘性头部</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>折叠面板</a></router-link>
						</ul>
						<p class="list-title">基础组件 - 图表类</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>二维码</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>图片放大</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>图片缩略图</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>echart</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>表格</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>树控件</a></router-link> 
						</ul>
						<p class="list-title">基础组件 - 其他</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>头像</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>盖章</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>标记badge</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>评分</a></router-link> 
						</ul>
					</div>
					<div class="module-list">
						<p class="list-title">组件服务 - 提示类</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>网络请求各种情况、浏览器提示</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>操作提示-message</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>操作提示-messagebox</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>操作提示-tooltip</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>操作提示-popover</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>通知</a></router-link>
						</ul>
						<p class="list-title">组件服务 - 表单操作</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>表单验证</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>自动补全</a></router-link> 
						</ul>
						<p class="list-title">组件服务 - 文本类</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>多行文本省略</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>模糊提示</a></router-link> 
						</ul>
						<p class="list-title">组件服务 - 工具库</p>
						<ul class="list-menu">
							<router-link to="basemodule/imgTobase64" tag="li"><a>图片转base64</a></router-link> 
							<router-link to="basemodule/formatDate" tag="li"><a>日期格式化</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>数字格式化</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>url解析</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>string处理</a></router-link> 
							<router-link to="basemodule/input" tag="li"><a>多语言（i18n）</a></router-link>
							<router-link to="basemodule/input" tag="li"><a>可拖拽</a></router-link>    
						</ul>
						  
					</div>
					<div class="module-list">
						<p class="list-title">业务组件</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>待定</a></router-link> 
						</ul>
						<p class="list-title">uiScript</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>uiScript使用文档</a></router-link> 
						</ul>
						<p class="list-title">第三方插件</p>
						<ul class="list-menu">
							<router-link to="basemodule/input" tag="li"><a>第三方插件推荐</a></router-link> 
						</ul>
					</div>
				</div>
			</div>
			<div class="right-pane">
				<p class="title">样式布局</p>
				<p class="list-title">共用样式</p>
				<ul class="list-menu">
					<router-link to="basemodule/input" tag="li"><a>重置</a></router-link>
					<router-link to="basemodule/input" tag="li"><a>颜色</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>间距</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>布局</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>面对属性样式</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>常用布局（垂直居中）</a></router-link>  
				</ul>
				<p class="list-title">经典布局</p>
				<ul class="list-menu">
					<router-link to="basemodule/input" tag="li"><a>门户</a></router-link>
					<router-link to="basemodule/input" tag="li"><a>运维</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>移动端</a></router-link> 
				</ul>
				<p class="list-title">图标动画</p>
				<ul class="list-menu">
					<router-link to="basemodule/input" tag="li"><a>图标库</a></router-link> 
					<router-link to="basemodule/input" tag="li"><a>动画库</a></router-link> 
				</ul>
			</div>
		</div>
	</div>
</template> 

<script>
 
</script>