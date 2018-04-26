let code = {};

code.base = `
<template>
    <sg-tree :treeData.sync='data'></sg-tree>
</template>
<script>
    export default {
        data () {
            return {
                 data:[{
                    title: 'parent 1',
                    expand: true,
                    children: [
                            {
                              title: 'parent 1-1',
                              expand: true,
                              children: [
                                      { title: 'leaf 1-1-1'},
                                      {title: 'leaf 1-1-2'}
                                   ]
                             },
                            {
                                title: 'parent 1-2',
                                children: [
                                    {title: 'leaf 1-2-1'},
                                    {title: 'leaf 1-2-1'}
                                ]
                            }]
                    }]
                }
            }
        }
</script>
`;
code.callback = `
<template>
    <sg-tree :treeData.sync='data' :nodeClick="nodeClick" :expand = "expandFun" :cxtmenu='contextmenuClick'></sg-tree>
</template>
<script>
    export default {
        data () {
            return {
                 data:[{
                    title: 'parent 1',
                    expand: true,
                    children: [
                            {
                              title: 'parent 1-1',
                              expand: true,
                              children: [
                                      { title: 'leaf 1-1-1'},
                                      {title: 'leaf 1-1-2'}
                                   ]
                             },
                            {
                                title: 'parent 1-2',
                                children: [
                                    {title: 'leaf 1-2-1'},
                                    {title: 'leaf 1-2-1'}
                                ]
                            }]
                    }]
                }
            },
            methods: {
                nodeClick(m){
                    console.log("节点点击回调:")
                    console.log(m)
                },
                expandFun(m){
                    console.log("展开收起回调:")
                    console.log(m)
                },
                contextmenuClick(m){
                    console.log("右击事件回调:")
                    console.log(m)
                }
            }
        }
</script>
`;

 

export default code;
