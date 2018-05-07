<template>
	<div class="sg-preview">
  		<div class="my-gallery">
  			<figure v-for="list in imgListData">
  				<a :href="list.url" :data-size="list.size" itemprop="contentUrl">
  					<img :src="list.minurl" itemprop="thumbnail"  :alt="list.alt"/>
  				</a>
		 		<a itemprop="caption description" style="display:none">{{list.text}}</a> 
  			</figure>
  		</div>
		<!-- Root element of PhotoSwipe. Must have class pswp. -->
		<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

    <!-- Background of PhotoSwipe. 
         It's a separate element, as animating opacity is faster than rgba(). -->
    <div class="pswp__bg"></div>

    <!-- Slides wrapper with overflow:hidden. -->
    <div class="pswp__scroll-wrap">

        <!-- Container that holds slides. PhotoSwipe keeps only 3 slides in DOM to save memory. -->
        <!-- don't modify these 3 pswp__item elements, data is added later on. -->
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>

        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
        <div class="pswp__ui pswp__ui--hidden">

            <div class="pswp__top-bar">

                <!--  Controls are self-explanatory. Order can be changed. -->

                <div class="pswp__counter"></div>

                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

                <button class="pswp__button pswp__button--share" title="Share"></button>

                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

                <!-- Preloader demo https://codepen.io/dimsemenov/pen/yyBWoR -->
                <!-- element will get class pswp__preloader--active when preloader is running -->
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>

            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>

            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>

            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>

            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>

          </div>

        </div>
		</div>
	</div>
</template>
<script>
import Vue from 'vue'
import PhotoSwipe from './photoswipe/photoswipe.js'
import PhotoSwipeUI_Default from './photoswipe/photoswipe-ui-default.js'
	export default {
        name: 'SgPreview',
		data(){
			return{
				imgListData:[]
			}
		},
		props:{
		  	//图片数据
		  	imgList:{
       	  		type:Array,
       	  		twoWay:true
        	},
		},
		watch:{
        	'imgList': {
            	handler:function(){
            		this.initPhotoSwipeFromDOM();
            	},
            	deep:true
        	}
		},
		methods:{
			//初始化处理图片数据
			initImgData(){
				 console.log(this.imgList)
				 var imgList = JSON.parse(JSON.stringify(this.imgList));
				 var recurrenceFun = (data) => {
					data.forEach((obj)=>{
						obj.size = obj.size || '1024x1024';
						obj.text = obj.text || '';
					}) 
				 	 
				} 
				recurrenceFun(imgList);
				 this.imgListData = imgList;
			},
			initPhotoSwipeFromDOM(gallerySelector){

				this.initImgData()
				const self = this
    			// 从DOM元素解析幻灯片数据（url,title,size,...）
    			// ( gallerySelector 的子项)
    			var parseThumbnailElements = function(el) {
        			var thumbElements = el.childNodes,
            		numNodes = thumbElements.length,
            		items = [],
            		figureEl,
            		linkEl,
            		size,
            		item;

       			for(var i = 0; i < numNodes; i++) {

            		figureEl = thumbElements[i]; // <figure> element

            		// include only element nodes 
            		if(figureEl.nodeType !== 1) {
                		continue;
            		}

            		linkEl = figureEl.children[0]; // <a> element

            		size = linkEl.getAttribute('data-size').split('x');

            		// create slide object
            		item = {
                		src: linkEl.getAttribute('href'),
                		w: parseInt(size[0], 10),
                		h: parseInt(size[1], 10)
            		};

            		if(figureEl.children.length > 1) {
                		// <figcaption> content
                		item.title = figureEl.children[1].innerHTML; 
            		}

            		if(linkEl.children.length > 0) {
                		// <img> thumbnail element, retrieving thumbnail url
                		item.msrc = linkEl.children[0].getAttribute('src');
            		} 

            		item.el = figureEl; // save link to element for getThumbBoundsFn
            		items.push(item);
        		}
       			 return items;
    			};
    			// 找到最近的父元素
    				var closest = function closest(el, fn) {
        				return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    				};

    		// 当用户点击缩略图时触发
    		var onThumbnailsClick = function(e) {
        		e = e || window.event;
        		e.preventDefault ? e.preventDefault() : e.returnValue = false;

        		var eTarget = e.target || e.srcElement;

        		// 找到幻灯片根元素
        		var clickedListItem = closest(eTarget, function(el) {
           	 		return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        		});

        		if(!clickedListItem) {
            		return;
        		}

        	// 通过循环遍历所有子节点找到点击的索引
        	// 或者，你可以通过数据属性定义索引
        	var clickedGallery = clickedListItem.parentNode,
            	childNodes = clickedListItem.parentNode.childNodes,
            	numChildNodes = childNodes.length,
            	nodeIndex = 0,
            	index;

        	for (var i = 0; i < numChildNodes; i++) {
            	if(childNodes[i].nodeType !== 1) { 
                	continue; 
            	}

            	if(childNodes[i] === clickedListItem) {
                	index = nodeIndex;
                	break;
            	}
            	nodeIndex++;
        	}



        	if(index >= 0) {
            // 如果找到索引，打开PhotoSwipe
            	openPhotoSwipe( index, clickedGallery );
        	}
        		return false;
    		};

    		// 从URL解析图片索引和图库索引（#&pid = 1&gid = 2）
    		var photoswipeParseHash = function() {
        	var hash = window.location.hash.substring(1),
       		 params = {};

        	if(hash.length < 5) {
            	return params;
        	}

        	var vars = hash.split('&');
        	for (var i = 0; i < vars.length; i++) {
            	if(!vars[i]) {
                	continue;
            	}
            	var pair = vars[i].split('=');  
            	if(pair.length < 2) {
                	continue;
            	}           
            	params[pair[0]] = pair[1];
        	}

        	if(params.gid) {
            	params.gid = parseInt(params.gid, 10);
        	}

       		 	return params;
    		};

    		var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        	var pswpElement = document.querySelectorAll('.pswp')[0],
            	gallery,
            	options,
            	items;

        	items = parseThumbnailElements(galleryElement);

        	// 定义选项（如果需要）
        	options = {

            // 定义图库索引 (对于URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // 有关更多信息，参阅选项 -> getTheumbBoundsFn文档部分
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                	return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            	}

        	};

        	// 从URL打开PhotoSwipe
       		if(fromURL) {
            	if(options.galleryPIDs) {
                	// 使用自定义PID时解析实际索引
                	// http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                	for(var j = 0; j < items.length; j++) {
                    	if(items[j].pid == index) {
                        	options.index = j;
                        	break;
                    	}
                	}
            	} else {
                // 在URL索引中从1开始
                options.index = parseInt(index, 10) - 1;
            	}
        	} else {
            	options.index = parseInt(index, 10);
        	}

        	// 如果找不到索引退出
       	 	if( isNaN(options.index) ) {
            	return;
        	}

        	if(disableAnimation) {
            	options.showAnimationDuration = 0;
        	}

        	// 将数据传递给PhotoSwipe并初始化它
        		gallery = new PhotoSwipe( pswpElement,PhotoSwipeUI_Default, items, options);
        		gallery.init();
        		gallery.listen('close',function(){
        		self.$emit('previewClose')

        		})
        		 
    		};

    		// 遍历所有图库元素并绑定事件
    		var galleryElements = document.querySelectorAll( gallerySelector );

    		for(var i = 0, l = galleryElements.length; i < l; i++) {
        		galleryElements[i].setAttribute('data-pswp-uid', i+1);
        		galleryElements[i].onclick = onThumbnailsClick;
    		}

    		// 解析URL并打开库，如果它包含 #&pid=3&gid=1
    		var hashData = photoswipeParseHash();
    			if(hashData.pid && hashData.gid) {
        			openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    			}

			 	}
			},
			update(){
			this.initPhotoSwipeFromDOM('.my-gallery');
			},
			mounted(){
				Vue.nextTick(()=>{
					this.initPhotoSwipeFromDOM('.my-gallery');
				})
			}

	}
</script>
<style>
.my-gallery {
  width: 100%;
  float: left;
}
.my-gallery img {
  width: 100%;
  height: auto;
}
.my-gallery figure {
  display: block;
  float: left;
  margin: 0 5px 5px 0;
  width: 150px;
}
.my-gallery figcaption {
  display: none;
}
</style>