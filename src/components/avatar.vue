<template>
    <span :class="classes">
        <img :src="src" v-if="src">
        <span ref="children" :class="[prefixCls + '-string']" :style="childrenStyle" v-else><slot></slot></span>
    </span>
</template>
<script>
  const prefixCls = 'ivu-avatar';
  export default {
    name: 'Avatar',
    props: {
      shape: {
        default: 'circle'
      },
      size: {
        default: 'default'
      },
      src: {
        type: String
      },
      icon: {
        type: String
      }
    },
    data () {
      return {
        prefixCls: prefixCls,
        scale: 1,
        childrenWidth: 0,
        isSlotShow: false
      };
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.shape}`,
          `${prefixCls}-${this.size}`,
          {
            [`${prefixCls}-image`]: !!this.src,
            [`${prefixCls}-icon`]: !!this.icon
          }
        ];
      },
      childrenStyle () {
        let style = {};
        if (this.isSlotShow) {
          style = {
            msTransform: `scale(${this.scale})`,
            WebkitTransform: `scale(${this.scale})`,
            transform: `scale(${this.scale})`,
            position: 'absolute',
            display: 'inline-block',
            left: `calc(50% - ${Math.round(this.childrenWidth / 2)}px)`
          };
        }
        return style;
      }
    },
    methods: {
      setScale () {
        this.isSlotShow = !this.src && !this.icon;
        if (this.$refs.children) {
          // set children width again to make slot centered
          this.childrenWidth = this.$refs.children.offsetWidth;
          const avatarWidth = this.$el.getBoundingClientRect().width;
          // add 4px gap for each side to get better performance
          if (avatarWidth - 8 < this.childrenWidth) {
            this.scale = (avatarWidth - 8) / this.childrenWidth;
          } else {
            this.scale = 1;
          }
        }
      }
    },
    mounted () {
      this.setScale();
    },
    updated () {
      this.setScale();
    }
  };
</script>
<style scoped>
  .ivu-avatar {
    display: inline-block;
    text-align: center;
    background: #ccc;
    color: #fff;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    width: 32px;
    height: 32px;
    line-height: 32px;
    border-radius: 16px;
  }
  .ivu-avatar>img {
    width: 100%;
    height: 100%;
  }
  .ivu-avatar-square {
    border-radius: 4px;
  }
  .ivu-avatar .ivu-avatar-string{
    font-size: 18px;
  }
  .ivu-avatar-large {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }
  .ivu-avatar-large.ivu-avatar-square {
    border-radius: 4px;
  }
  .ivu-avatar-large .ivu-avatar-string{
    font-size: 24px;
  }
  .ivu-avatar-large.ivu-avatar-icon {
    font-size: 24px;
  }
  .ivu-avatar-small {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 12px;
  }
  .ivu-avatar-small .ivu-avatar-string{
    font-size: 14px;
  }
  .ivu-avatar.ivu-avatar-icon {
    font-size: 18px;
  }
</style>
