<template>
  <div class="row">
    <div class="col-xl-10 col-12 col-md-8 bg-content">
  <slot></slot>
    </div>
  <div class="col-12 col-md-4 col-xl-2 bd-toc">
    <ul class="section-nav">
      <li v-for="item in list" class="toc-entry toc-h2">
        <a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>
      </li>
    </ul>
  </div>
  </div>
</template>

<script>
    export default {
      data(){
          return{
            list:[]
          }
      },
      methods:{
        // 控制锚点跳转
        handleClickLink (id) {
          const top = document.getElementById(id).offsetTop;
          window.scrollTo(0, top);
        },
      },
      mounted(){
        //获取卡槽内所有的标题作为目录
        const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
        for (let i = 0; i < headers.length; i++) {
          const title = headers[i].querySelectorAll('h3,h4')[0];
          if (title) {
            const title_name = title.innerHTML;
            const path = headers[i].querySelectorAll('h3,h4')[0].getAttribute('id');
            this.list.push({
              title: title_name,
              path: path
            });
          }
        }
      }
    }
</script>
<style lang="less">
  .bg-content{
    padding-top: 25px;
    padding-bottom: 50px;
    table:not(.el-table__header):not(.el-table__body):not(.el-table__footer){
      thead,tbody,tfoot{
        tr{
          th,td{
            padding: .75rem;
            vertical-align: top;
            border: 1px solid #dee2e6;
          }
        }
      }
    }
  }
</style>
