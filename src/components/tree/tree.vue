 <template>
	<div class="tree-wrap" v-if='treeDataSource.length>0'>
		<div class=" ">
			<ul class="v-tree">
				<ztree-item v-for='(m,i) in treeDataSource' :key='i' :model.sync="m" :num.sync='i' root='0' :nodes.sync='treeDataSource.length' :callback='func' :expandfunc='expand' :cxtmenufunc='contextmenu' :trees.sync='treeDataSource' :editNodeSubmit = 'editnode' :delnodeCb='delnode'></ztree-item>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
export default{
    name: 'SgTree',
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
		},
		//确认修改回调
		editnode:{
			type:Function,
			default:null
		},
		delnode:{
			type:Function,
			default:null
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
                	parentNodeModel : null,
        		  	status:true,
        		  	rename:''
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
				},
				editNodeSubmit:{
					type:Function
				},
				delnodeCb:{
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
                editNode(m,e){
                	e.stopPropagation();//阻止点击事件向上冒泡  
                    this.rename = m.name;
                	this.status = false;
                 
                	//console.log(nodeModel);
                },
                //确认修改
                submitNode(m,e){
			    	e.stopPropagation();//阻止点击事件向上冒泡
			    	// console.log(m);
			    	// console.log(this.rename);
			    	m.name = this.rename;
			    	this.status = true
			    		if(typeof this.editNodeSubmit == "function"){
                		this.editNodeSubmit.call(null,m);
                	}
			    },
			    queryNode(nodeModel,e){
			    	e.stopPropagation();//阻止点击事件向上冒泡
			    	this.status = true

			    },
                // 新增节点
			    addNode(nodeModel,e){
			    	e.stopPropagation();//阻止点击事件向上冒泡
			        if(nodeModel) {
			          nodeModel.children.push({
			              id:+new Date(),
			              name:"动态新增节",
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
			    delNode(m,e){
			    	e.stopPropagation();//阻止点击事件向上冒泡
			        if(m) {
			           if(this.parentNodeModel.hasOwnProperty("children")) {
			              this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(m),1);
			           }else if(this.parentNodeModel instanceof Array){
			              // 第一级根节点处理
			              this.parentNodeModel.splice(this.parentNodeModel.indexOf(m),1);
			           }
			            if(typeof this.delnodeCb == "function"){
			            	alert(m)
                		  this.delnodeCb.call(null,m);
                		}
			           m = null;
			           
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
                },
                toggle(){
                	return "collapse-wrap";
                }
        	},
        	components:{	 
        		collapseTransition:{
        		  name: 'collapseTransition', 
        		  props: {
        		  	Transition:''
        		  },
        		  functional: true,
  					render (h, { children }) {
    					const data = {
     						 on: {
  								'before-enter' (el) {
								el.style.transition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
    							if (!el.dataset) el.dataset = {}
    								el.dataset.oldPaddingTop = el.style.paddingTop
    								el.dataset.oldPaddingBottom = el.style.paddingBottom
    								el.style.height = 0
    								el.style.paddingTop = 0
    								el.style.paddingBottom = 0
    							},

  								'enter' (el) {
    								el.dataset.oldOverflow = el.style.overflow
    								if (el.scrollHeight !== 0) {
     									el.style.height = el.scrollHeight + 'px'
      									el.style.paddingTop = el.dataset.oldPaddingTop
      									el.style.paddingBottom = el.dataset.oldPaddingBottom
    								} else {
      									el.style.height = ''
      									el.style.paddingTop = el.dataset.oldPaddingTop
      									el.style.paddingBottom = el.dataset.oldPaddingBottom
    								}
    									el.style.overflow = 'hidden'
    								},

  								'after-enter' (el) {
    									el.style.transition = ''
    									el.style.height = ''
    									el.style.overflow = el.dataset.oldOverflow
  									},
								'before-leave' (el) {
    									if (!el.dataset) el.dataset = {}
    									el.dataset.oldPaddingTop = el.style.paddingTop
    									el.dataset.oldPaddingBottom = el.style.paddingBottom
    									el.dataset.oldOverflow = el.style.overflow
										el.style.height = el.scrollHeight + 'px'
    									el.style.overflow = 'hidden'
    								},
  								'leave' (el) {
    									if (el.scrollHeight !== 0) {
      										el.style.transition = '0.3s height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out'
      										el.style.height = 0
      										el.style.paddingTop = 0
      										el.style.paddingBottom = 0
    									}
  									},

  								'after-leave' (el) {
    							el.style.transition = ''
    							el.style.height = ''
    							el.style.overflow = el.dataset.oldOverflow
    							el.style.paddingTop = el.dataset.oldPaddingTop
    							el.style.paddingBottom = el.dataset.oldPaddingBottom
  							}
							}
   					 	}
   					 	return h('transition', data, children)
  					},
        		}
        	},
        	directives:{
        		focus:{
        			inserted (el,binding){
        				el.focus()
        			}
        		}
        	},
            template: 
            `<li :class="liClassVal">
            	<div class="item" @click="open(model),Func(model)" @contextmenu.prevent='cxtmenufunc(model)'>
				<span :class="spanClassVal"></span>
				<a @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)'>
				    <span :class="{loadSyncNode:model.loadNode==1}" v-if='model.loadNode==1'></span>
				    <span :class='model.iconClass' v-show='model.iconClass' v-else></span>
					<span class="node_name" :class='aClassVal'  v-if="status">{{model.name}}</span>
					<input class="node_input" type="text" v-focus v-model="rename"  @click="$event.stopPropagation();" v-else ></input>
					<!--修改-->
					<span   title='修改' class="button edit" @click="editNode(model,$event)" v-if="status"></span>
					<!--新增-->
					<span   title='新增' class="button add" @click="addNode(model,$event)" v-if="status"></span>
					<!--删除-->
				    <span   title='删除' class="button remove" @click="delNode(model,$event)" v-if="status"></span>
				    <!--上移-->
				    <span v-show='model.hover' title='上移' class="button up" @click="upNode(model)" v-if="status"></span>
				    <!--下移-->
				    <span v-show='model.hover' title='下移' class="button down" @click="downNode(model)" v-if="status"></span>
				    <input class="edit-submitbtn" type="button" value="确定" v-if="!status" @click="submitNode(model,$event)">
				    <input class="edit-querybtn" type="button" value="取消" v-if="!status" @click="queryNode(model,$event)">
				</a>
				</div>
				<collapse-transition>
				<ul :class="toggle"  v-show='model.isFolder'>
					<ztree-item v-for="(item,i) in model.children" :key='i' :callback='callback' :expandfunc='expandfunc' :cxtmenufunc='cxtmenufunc' :model.sync="item" :num.sync='i' root='1' :nodes.sync='model.children.length' :trees.sync='trees' :editNodeSubmit = 'editNodeSubmit' :delnodeCb='delnodeCb'></ztree-item>
				</ul>
				</collapse-transition>
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
