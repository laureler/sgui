let code = {};

code.base = `
<template>
    <sg-preview :imgList="item"></sg-preview>
</template>
<script>
    export default {
        data () {
            return {
                    item:[
                      {
                        url:'https://farm3.staticflickr.com/2567/5697107145_a4c2eaa0cd_o.jpg',
                        minurl:'https://farm3.staticflickr.com/2567/5697107145_3c27ff3cd1_m.jpg',
                        size:'1024x1024',  //预览时图片宽高（大于屏口宽度时为屏口宽度下的默认值）不传默认1024*1024（相当于最大）
                        alt:'图片1'
                      },
                      { 
                        url:'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
                        minurl:'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_m.jpg',
                        size:'964x1024',
                        text:'图片2', //图片的文字信息，不传默认为空
                        alt:'图片2'
                        }
                    ]
                }
            }
        }
</script>
`;
 

 

export default code;
