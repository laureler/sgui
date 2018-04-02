 
<template>
	<div class="tree-wrap" v-if='treeDataSource.length>0'>
		<div class=" ">
			<ul class="v-tree">
				<ztree-item v-for='(m,i) in treeDataSource' :key='i' :model.sync="m" :num.sync='i' root='0' :nodes.sync='treeDataSource.length' :callback='func' :expandfunc='expand' :cxtmenufunc='contextmenu' :trees.sync='treeDataSource'></ztree-item>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
export default{
	data(){
       return {
       	  treeDataSource:[]
       }
	},
	props:{
		// 树数据
        list:{
       	  	type:Array,
       	  	twoWay:true
        },
        // 点击节点回调
		func:{
			type:Function,
			default:null
		},
		// 点击展开回调
		expand:{
            type:Function,
            default:null
		},
		// 右击事件
		contextmenu:{
            type:Function,
            default:function(){
            	console.log("defalt click contextmenu");
            }
		},
		// 是否展开
		isOpen:{
			type:Boolean,
			twoWay:true,
			default:false
		}
	},
	watch:{
        'list': {
            handler:function(){
            	this.initTreeData();
            },
            deep:true
        }
	},
	methods:{
        initTreeData(){
            var tempList = JSON.parse(JSON.stringify(this.list));
            
            // 递归操作，增加删除一些属性。比如: 展开/收起
            var recurrenceFunc = (data) => {
                data.forEach((m)=>{
                    if(!m.hasOwnProperty("clickNode")){
	                    m.clickNode = m.hasOwnProperty("clickNode") ? m.clickNode : false;
	                }

                    m.children = m.children || [];

                    m.hover = false;
            
                    if(	!m.hasOwnProperty("isFolder") ) {
	               		m.isFolder =  m.hasOwnProperty("open") ? m.open : this.isOpen;
	                }

	                if(	!m.hasOwnProperty("isExpand") ) {
	               		m.isExpand =  m.hasOwnProperty("open") ? m.open : this.isOpen;
	               	}

	               	m.loadNode = 0; 
	               	
	               	recurrenceFunc(m.children);
    
                    
                })
            };

            recurrenceFunc(tempList);

            this.treeDataSource = tempList;
        }
	},
	components:{
		// 组件
        ztreeItem:{
        	name: 'ztreeItem',
        	data(){
                return {
                	parentNodeModel : null
                }
        	},
        	props: {
        		model:{
        			type:Object,
        			twoWay:true
        		},
        		num:{
                    type:Number,
                    twoWay:true
        		},
        		nodes:{
                    type:Number,
                    twoWay:true,
                    default:0
        		},
        		trees:{
		       	  	type:Array,
		       	  	twoWay:true,
		       	  	default:[]
		        },
        		root:{
                    type:String,
                    twoWay:true
        		},
        		callback:{
					type:Function
				},
				expandfunc:{
					type:Function
				},
				cxtmenufunc:{
					type:Function
				}
        	},
        	methods:{
                Func(m){
                    // 查找点击的子节点
                    var recurFunc = (data,list) => {
                        data.forEach((i)=>{
                            if(i.id==m.id){
                                i.clickNode = true;

                                if(typeof this.callback == "function") {
				                    this.callback.call(null,m,list,this.trees);
				                }
                            }else {
                              i.clickNode = false;
                            }

                            if(i.children){
                               recurFunc(i.children,i);
                            }
                        })
                    }

                    recurFunc(this.trees,this.trees);
                },
                getParentNode(m){
                    // 查找点击的子节点
                    var recurFunc = (data,list) => {
                        data.forEach((i)=>{
                            if(i.id==m.id) this.parentNodeModel = list;
                            if(i.children) recurFunc(i.children,i);
                        })
                    }
                    recurFunc(this.trees,this.trees);
                },
                open(m){
                	//
                	m.isExpand = !m.isExpand;
           
                	if(typeof this.expandfunc == "function" && m.isExpand) {
                		if(m.loadNode!=2) {
		                	//
		                    this.expandfunc.call(null,m);
		                }else {
		                	m.isFolder = !m.isFolder;
		                }
	                } else {
                        m.isFolder = !m.isFolder;
	                }
                },
                enterFunc(m){
                    m.hover = true;
                    this.getParentNode(m);
                },
                leaveFunc(m){
                	m.hover = false;
                },
                //修改节点
                editNode(nodeModel){
                	console.log(nodeModel);
                },
                // 新增节点
			    addNode(nodeModel){
			        if(nodeModel) {
			          nodeModel.children.push({
			              id:+new Date(),
			              name:"动态新增节点哦～",
			              path:"",
			              clickNode:false,
			              isFolder:false,
			              isExpand:false,
			              hover:false,
			              loadNode:0,
			              children:[]
			          });
			          nodeModel.isFolder = true;
			        }else {
			          console.log("请先选中节点");
			        }
			    },
			    // 删除节点
			    delNode(nodeModel){
			        if(nodeModel) {
			           if(this.parentNodeModel.hasOwnProperty("children")) {
			              this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			           }else if(this.parentNodeModel instanceof Array){
			              // 第一级根节点处理
			              this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			           }
			           nodeModel = null;
			        }else {
			           console.log("请先选中节点");
			        }
			    },
			    upNode(nodeModel){
			       if(!nodeModel) console.log("请先选中节点");

			       if(this.parentNodeModel.hasOwnProperty("children")) {
			          var index = this.parentNodeModel.children.indexOf(nodeModel);
			          if(index-1>=0) {
			            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			            this.parentNodeModel.children.splice(index-1,0,model[0]);
			          }
			       }else if(this.parentNodeModel instanceof Array){
			          // 第一级根节点处理
			          var index = this.parentNodeModel.indexOf(nodeModel);
			          if(index-1>=0) {
			            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			            this.parentNodeModel.splice(index-1,0,model[0]);
			          }
			       }
			    },
			    downNode(nodeModel){
			       if(!nodeModel) console.log("请先选中节点");

			       if(this.parentNodeModel.hasOwnProperty("children")) {
			          var index = this.parentNodeModel.children.indexOf(nodeModel);
			          if(index+1<=this.parentNodeModel.children.length) {
			            var model = this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(nodeModel),1);
			            this.parentNodeModel.children.splice(index+1,0,model[0]);
			          }
			       }else if(this.parentNodeModel instanceof Array){
			          // 第一级根节点处理
			          var index = this.parentNodeModel.indexOf(nodeModel);
			          if(index+1<=this.parentNodeModel.length) {
			            var model = this.parentNodeModel.splice(this.parentNodeModel.indexOf(nodeModel),1);
			            this.parentNodeModel.splice(index+1,0,model[0]);
			          }
			       }
			    }
        	},
        	computed:{
        		// 给（根 和 子树）赋值不同的样式
                rootClass(){
                	 var strRootClass = '';
                     
                     // 根判断
                	 if(this.root=='0'){
                       this.model.children = this.model.children || [];
                       strRootClass =  (this.num==0 && this.model.children.length==0) ? "roots_docu" : (this.nodes==1) || (this.num==0 && this.nodes!=this.num+1) ? 
                         "root_" : (this.nodes == this.num+1) ? "bottom_" : "center_";
                     
                     // 子树判断
                	 }else if(this.root=='1') {
                        this.model.children = this.model.children || [];
                        strRootClass =  this.nodes>1 && this.model.children.length>0 && this.nodes!=this.num+1
                         ? "center_" : 
                            (this.num == 0 && this.nodes>1) || (this.nodes!=this.num+1) ? "center_docu" : 
                                 this.nodes == 1&&this.num!=0 || (this.nodes==this.num+1 && this.model.children.length>0)   ? "bottom_" : "bottom_docu";
                	 }

                	 return  strRootClass
                },
                // 是否有儿子节点
                isChildren(){
                     return this.num+1 != this.nodes;
                },
                // 展开/收起
                prefixClass(){
                	var returnChar = "";
                	if(this.rootClass.indexOf("docu")==-1){
	                	if(this.model.isFolder){
                           returnChar = "open";
	                	}else {
                           returnChar = 'close'
	                	}
	                }

	                if(this.model.children.length==0 && this.rootClass.indexOf("docu")==-1){
                        returnChar = 'docu'
	                }
	                
	                return returnChar;
                },
                liClassVal(){
                	 return "level"+this.num;
                },
                spanClassVal(){
                	 return "button level"+this.num+" switch "+this.rootClass+this.prefixClass;
                },
                aClassVal(){
                     return this.model.clickNode ? "level"+this.num+' curSelectedNode':"level"+this.num;
                },
                ulClassVal(){
                	return this.isChildren && this.model.children.length>0 ?"level"+this.num+' line':"level"+this.num;
                }
        	},
            template: 
            `<li :class="liClassVal">
            	<div class="item" @click='open(model)'>
				<span :class="spanClassVal"></span>
				<a @click='Func(model)' @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)' @contextmenu.prevent='cxtmenufunc(model)'>
				    <span :class="{loadSyncNode:model.loadNode==1}" v-if='model.loadNode==1'></span>
				    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>
					<span class="node_name" :class='aClassVal'>{{model.name}}</span>

					<!--修改-->
					<span v-show='model.hover' title='修改' class="button edit" @click="editNode(model)"></span>
					<!--新增-->
					<span v-show='model.hover' title='新增' class="button add" @click="addNode(model)"></span>
					<!--删除-->
				    <span v-show='model.hover' title='删除' class="button remove" @click="delNode(model)"></span>
				    <!--上移-->
				    <span v-show='model.hover' title='上移' class="button up" @click="upNode(model)"></span>
				    <!--下移-->
				    <span v-show='model.hover' title='下移' class="button down" @click="downNode(model)"></span>
				</a>
				</div>
				
				<ul :class="ulClassVal" v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync="item" :num.sync='i' root='1' :nodes.sync='model.children.length' :trees.sync='trees'></ztree-item>
				</ul>
			</li>`
		}
	},
	update(){
		this.initTreeData();
	},
	mounted(){
		Vue.nextTick(()=>{
			this.initTreeData();
		})
	}
}
</script> 
