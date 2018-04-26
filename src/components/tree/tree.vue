<template>
	<div class="sgtree-wrap" v-if="sgTreeData.length>0">
		<ul>
			<sg-treeitem v-for='(m,i) in sgTreeData' :key='i' :model.sync="m" :expandfun = 'expand' :nodeClickfun = 'nodeClick' :cxtmenufun='cxtmenu'  :trees.sync='sgTreeData'></sg-treeitem>
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

        		},
        		template:`<li>
        		 		<div @contextmenu.prevent='cxtmenufun(model)'>
        		 		<span @click="open(model)" :class="model.isOpen ? 'arrow-right-open':'arrow-right'" v-if="!model.isLeaf"></span>
        		 		<span class="leaf-icon" v-if="model.isLeaf"></span>
        		 		<a @click="nodeClick(model)" >{{model.title}}</a>
        		 		</div> 
        		 		<collapse-transition>
        				<ul v-show='model.isOpen'> 
        			 		<sg-treeitem v-for="(item,i) in model.children" :key='i' :model.sync="item" :expandfun = 'expandfun' :nodeClickfun = 'nodeClickfun' :cxtmenufun='cxtmenufun'  :trees.sync='trees'>  </sg-treeitem>
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