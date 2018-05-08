<template>
	<div class="tabs">
        <div class="tabs-bar">
            <!--标题页的标题 v-for遍历, :class 动态绑定class-->
            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">
                {{item.label}}
                <div class="delBtn" v-if='navList.length != 1' @click="closeTab(index)"></div>
            </div>
            <div class="addBtn" @click="addTab"></div>
        </div>
        
        <div class="tabs-content">
            <!--这里的slot就是嵌套的pane组件的内容-->
            <slot></slot>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data() {
        return {
            //将pane的标题保存到数组中
            navList: [],
            //保存父组件的value到currentValue变量中，以便在本地维护
            currentValue: this.value
        }
    },
    props: {
        //接收父组件的value
        value: {
            type: [String]
        }
    },
    methods: {
        // childFn(){
        //     this.updateNav();
        // },
        //使用$children遍历子组件，得到所有的pane组件
        getTabs: function() {
            return this.$children.filter(function(item) {
                return item.$options._componentTag === "sg-pane";
            })
        },
        closeTab(index){
            this.$emit('closeTab',index);
        },
        addTab(){
            this.$emit('addTab');
        },
        //更新tabs
        updateNav() {
            this.navList = [];
            var _this = this;
            var thisGetTabs = this.getTabs();
            
            thisGetTabs.forEach(function(pane, index) {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index
                });
                //如果没有设置name，默认设置为索引值
                if(!pane.name) {
                    pane.name = index;
                }
                //设置第一个pane为当前显示的tab
                if(index === 0) {
                    if(!_this.currentValue) {
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        updateStatus() {
            var tabs = this.getTabs();
            var _this = this;
            //显示当前选中的tab对应的pane组件，隐藏没有选中的
            tabs.forEach(function(tab) {
                return tab.show = tab.name === _this.currentValue;
            })
        },
        tabCls: function(item) {
            return [
                'tabs-tab',
                {
                    //为当前选中的tab加一个tabs-tab-active class
                    'tabs-tab-active': item.name === this.currentValue
                }
            ]
        },
        //点击tab标题触发
        handleChange: function(index) {
            var nav = this.navList[index];
            
            var name = nav.name;
            
            //改变当前选中的tab，触发watch
            this.currentValue = name;
            //实现子组件与父组件通信
            this.$emit('input', name);
        }
    },
    watch: {
        value: function(val) {
            this.currentValue = val;
        },
        currentValue: function() {
            //tab发生变化时，更新pane的显示状态
            this.updateStatus();
        }
    }
}
</script>
<style>
    .delBtn {
        cursor: pointer;
        position: absolute;
        top: 7px;
        right: 3px;
        width:14px;
        height:14px;
        font-size:14px;
        line-height:14px;
        text-align:center;
        background-image: url('../../assets/images/close.png');
        background-repeat: no-repeat;
        background-position: center;
    }
    .addBtn {
        width:32px;
        height:32px;
        float:right;
        text-align:center;
        line-height:32px;
        cursor: pointer;
        background-image: url('../../assets/images/add.png');
        background-repeat: no-repeat;
        background-position: center;
    }
</style>
