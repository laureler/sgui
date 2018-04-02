 <template>
 <li>
  <div>
   <i @click='toggle' v-if='isFolder' class="mui-icon iconfont" :class="[open?'icon-wenjianjia':'icon-wenjianjiaguanbi']"></i>
   <!--isFolder判断是否存在子级改变图标-->
   <i @click='toggle' class="mui-icon iconfont icon-wenjian" style="color: #00ccff" v-else></i>
   <span @click="propInstCode(model);propInstName(model)">
    {{model.name}}
   </span>
  </div>
  <ul v-show="open" v-if='isFolder'>
   <tree-menu v-for='cel in model.childList' :model='cel'></tree-menu>
  </ul>
 </li>
</template>
<script type="text/javascript">
/* import {bus} from '../../bus.js'*/
 export default {
  name: 'treeMenu',
  props: ['model','instType'],
  components: {},
  data() {
   return {
    open: false,
    isFolder: true,
   }
  },
  computed: {
  },
  methods: {
   toggle: function() {
    if(this.isFolder){
     this.open = !this.open;
    }
   },
   //通过总线将值传给父组件
   propInstCode:function (model) {
    //$emit触发当前实例事件
   //  bus.$emit('custTreeSay',this.model.id);
   },
   propInstName:function (model) {
   // bus.$emit('custTreeSayName',this.model.name);
   }
  },
  created(){
   //将isFolder放在这里判断可以识别出最底层菜单，然后改变图标，放在computed的话会一直报错并识别不出最底层菜单改变样式
   this.isFolder = this.model.childList && this.model.childList.length;
  }
 }
</script>
 
<style lang="less" rel="stylesheet/less" scoped>
 ul {
  list-style: none;
  padding-left: 20px;
 }
 ul li{
  list-style: none;
 }
 a{
  color: #404040;
  //text-decoration: underline;
 }
 i.icon {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-repeat: no-repeat;
  vertical-align: middle;
 }
 i{
  opacity: 0.8;
  color: #f0ad4e;
 }
 .tree-menu li {
  line-height: 1.5;
 }
</style>