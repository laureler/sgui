let code = {};

code.base1 = `
<template>
    <div v-cloak slot="demo">
        <sg-tabs @closeTab="closeTab" @addTab="addTab" v-model='value'><!--ref="child"-->
            <sg-pane :label="item.label" :textData="textData" :name='item.name' v-for="(item, index) in textData">
                {{item.content}}
            </sg-pane>
        </sg-tabs>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value: '1',
                textData: [{
                    label: "标签1",
                    name: '1',
                    content: "111"
                },{
                    label: "标签2",
                    name: '2',
                    content: "222"
                },{
                    label: "标签3",
                    name: '3',
                    content: "333"
                }],
                thisNo: 4,
            }
        },
        methods: {
            closeTab(index){
                this.textData.splice(index,1);
            },
            addTab(){
                this.textData.splice(this.textData.length,0,{
                    label: '标签'+this.thisNo,
                    name: ''+this.thisNo,
                    content: ''+this.thisNo
                });
                this.thisNo++;
            }
        }
    }
</script>
`;

 

export default code;
