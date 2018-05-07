<template>
	<div class="sgtree-wrap" v-if="sgTreeData.length>0">
		<ul>
			<sg-treeitem v-for='(m,i) in sgTreeData' :key='i' :model.sync="m" :expandfun = 'expand' :edit = 'isEdit' :nodeClickfun = 'nodeClick' :cxtmenufun='cxtmenu' :editNodeSubmit = 'editnode'  :trees.sync='sgTreeData' :delnodeCb='delnode'></sg-treeitem>
		</ul>
	</div>  
</template>
<script>
	import Vue from 'vue'
	export default{
		name:'SgTree',
		data(){
			return{
				sgTreeData:[]
			}
		},
		props:{
			//节点点击回调
			nodeClick:{
				type:Function,
				default:null
			},
			// 点击展开回调
			expand:{
				type:Function,
				default:null
			},
			// 右击事件回调
			cxtmenu:{
				type:Function,
				default:null
			},
			//树数据
			treeData:{
       	  		type:Array,
       	  		twoWay:true
        	},
			//是否展开
			isExpand:{
			 	type:Boolean,
				twoWay:true,   //....
				default:false
			},
			//是否可编辑
			isEdit:{
				type:Boolean,
				default:false
			},
			//修改节点成功回调
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
			'treeData' :{
				handler:function(){
            		this.initTreeData();   //....
            	},
            	deep:true
			}
		},
		methods:{
			initTreeData(){

				var tempList = JSON.parse(JSON.stringify(this.treeData));
				 
				var recurrenceFun = (data) => {
					data.forEach((m)=>{
					 m.children = m.children || [];
					 m.hover = false;
					 m.editstatus = false;
				 	 if(!m.hasOwnProperty("isOpen") ) { 
	               			m.isOpen =  m.hasOwnProperty("expand") ? m.expand : this.isExpand;
	               		}
	               	 if(m.children.length == 0){
	               		 m.isLeaf = true;
	               	 } else{
	               		 m.isLeaf = false;
	               	 }
	               	 
	               	 recurrenceFun(m.children);
				 	})
				 	 
				} 
				recurrenceFun(tempList);
				this.sgTreeData =  tempList;
				console.log(this.sgTreeData)
			}
		},
		components:{
			sgTreeitem : {
				name: 'sgTreeitem',
				data(){
                	return {
        		  		rename:'动态新增节',
        		  		parentNodeModel : null,
                	}
        		},
				props:{
        			model:{
        				type:Object,
        				twoWay:true
        			},
        			trees:{
		       	  		type:Array,
		       	  		twoWay:true,
		       	  		default:[]
		        	},
        			expandfun:{
						type:Function
					},
					nodeClickfun:{
						type:Function
					},
					cxtmenufun:{
						type:Function
					},
					edit:{
						type:Boolean
					},
					editNodeSubmit:{
						type:Function
					},
					delnodeCb:{
						type:Function
					}
        		},
        		template:`<li>
        		 		<div @contextmenu.prevent='cxtmenufun(model)'>
        		 		<span @click="open(model)" :class="model.isOpen ? 'arrow-right-open':'arrow-right'" v-if="!model.isLeaf"></span>
        		 		<span class="leaf-icon" v-if="model.isLeaf"></span>
        		 			<div @mouseenter='enterFunc(model)' @mouseleave='leaveFunc(model)' style="display:inline-block">
        		 				<a v-if="!model.editstatus" @click="nodeClick(model)">{{model.title}}</a>
        		 				<input class="edit-input" v-model="rename" v-focus type="text" v-if="model.editstatus">
        		 				<div v-show="model.hover && edit && !model.editstatus" class="edit-warp">
									<button class="edit-btn" title="修改" @click="editNode(model,$event)">修改</button>
									<button class="edit-btn" title="新增" @click="addNode(model,$event)">新增</button>
									<button class="edit-btn" title="删除" @click="delNode(model,$event)">删除</button>
        		 				</div>
								<div class="submit-wrap" v-if="model.editstatus">
									<button class="submit-btn" title="确定"  @click="submitEdit(model,$event)">确定</button>
									<button class="query-btn" title="取消" @click="queryEdit(model,$event)">取消</button> 
								</div>
        		 			</div>
        		 		</div> 
        		 		<collapse-transition>
        				<ul v-show='model.isOpen'> 
        			 		<sg-treeitem v-for="(item,i) in model.children" :key='i' :model.sync="item" :expandfun = 'expandfun' :nodeClickfun = 'nodeClickfun' :cxtmenufun='cxtmenufun' :edit='edit' :editNodeSubmit='editNodeSubmit' :trees.sync='trees' :delnodeCb='delnodeCb'>  </sg-treeitem> 
        		 		</ul> 
        		 		</collapse-transition>
        	 			</li>`,
        	 	methods:{
        	 		nodeClick(model){
        	 			if(typeof this.nodeClickfun == "function") {
				            this.nodeClickfun.call(null,model,this.trees);
				        }
        	 		},
        	 		open(model){
        	 			model.isOpen = ! model.isOpen;
        	 			if(typeof this.expandfun == "function" && !model.isLeaf) {
				            this.expandfun.call(null,model);
				        }
        	 		},
        	 		enterFunc(model){
        	 			model.hover = true;
                    	this.getParentNode(model);	
        	 		},
        	 		leaveFunc(model){
        	 			model.hover = false;
        	 		},
        	 		editNode(model,event){
        	 			event.stopPropagation();
        	 			model.editstatus = true;
        	 			this.rename = model.title;  
        	 		},
        	 		queryEdit(model,event){
        	 			event.stopPropagation();
        	 			model.editstatus = false;
        	 		},
        	 		submitEdit(model,event){
        	 			event.stopPropagation();
        	 			model.editstatus = false;
        	 			if(this.rename != model.title){
        	 				model.title = this.rename;
        	 				if(typeof this.editNodeSubmit == "function"){
                			this.editNodeSubmit.call(null,model);
                			}
        	 			}
        	 		},
			    	addNode(model,event){
			    		event.stopPropagation();
			        	if(model) {
			         	 model.children.push({
			              id:+new Date(),
			              title:"动态新增节",
			              isOpen:false,
			              isLeaf:true,
			              hover:false,
			              editstatus:true,
			              children:[]
			          	 });
			          	 model.isLeaf = false;
			           	 model.isOpen = true;
			        	}else {
			         	 console.log("请先选中节点");
			        	}
			        },
			        getParentNode(model){
                    	// 查找点击的子节点
                    	var recurFunc = (data,list) => {
                        	data.forEach((i)=>{
                            if(i.id==model.id) this.parentNodeModel = list;
                            if(i.children) recurFunc(i.children,i);
                        	})
                    	}
                    	recurFunc(this.trees,this.trees);
                	},
			        delNode(model,event){
			        	event.stopPropagation();
			        	if(model) {
			        		console.log(this.parentNodeModel)
			           		if(this.parentNodeModel.hasOwnProperty("children")) {
			              		this.parentNodeModel.children.splice(this.parentNodeModel.children.indexOf(model),1);
			           		}else if(this.parentNodeModel instanceof Array){
			              		// 第一级根节点处理
			              		this.parentNodeModel.splice(this.parentNodeModel.indexOf(model),1);
			           		}
			            	if(typeof this.delnodeCb == "function"){
			            	//alert(model)
                		 	 	this.delnodeCb.call(null,model);
                			}
			           		model = null;
			        	}else {
			           		console.log("请先选中节点");
			        	}
			        }
        	 	},
        	 	directives:{
        			focus:{
        				inserted (el,binding){
        					el.focus()
        				}
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
			},
			 
        },
        	 
        mounted(){
			Vue.nextTick(()=>{
				this.initTreeData();
			})	
		}

	}
</script>