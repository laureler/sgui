<template>
  <div>
    <div style="background: #efefef; width:100%">
      <div style="width:50%;padding:20px;background: #efefef;">
        <div style="background:#fff;padding:20px;">
          <sg-tree :list.sync='treeData' :func="nodeClick" :contextmenu='contextmenuClick' :editnode="edit"
                   :delnode="del"></sg-tree>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        treeData: [{
          id: 1,
          name: "音乐",
          children: [],
          url: "http://www.baidu.com"
        }, {
          id: 2,
          name: "视频",
          open: true,
          children: [{
            id: 3,
            name: "电影",
            open: true,
            children: [{
              id: 4,
              name: "国产电影",
              url: ""
            }, {
              id: 5,
              name: "好莱坞电影",
              url: ""
            }, {
              id: 6,
              name: "小语种电影",
              url: ""
            }]
          }, {
            id: 7,
            name: "短片",
            open: false,
            children: [{
              id: 9,
              name: "电视剧",
              url: ""
            }, {
              id: 10,
              name: "短片",
              url: ""
            }]
          }]
        }],
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      nodeClick(m) {
        if (m.children.length == '0') {
          console.log(m);
        }
      },
      contextmenuClick(m) {
        alert(m)
      },
      edit(m) {
        console.log(m)
      },
      del(m) {
        console.log(m)
      }
    }
  }
</script>
