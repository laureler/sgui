<template>
  <div class="demo">
    <Avatar :title="title" h4></Avatar>
    <slot name="desc"></slot>
    <div class="bd-example" :id="title">
      <slot name="demo"></slot>
    </div>
      <slot name="code"></slot>
  </div>
</template>
<script>
import Avatar from './anchor'
  export default {
    name: 'Demo',
    props: {
      title: {
        type: String,
        default: ''
      },
      vertical: {
        type: Boolean,
        default: false
      },
    },
    components:{Avatar}
  }
</script>
