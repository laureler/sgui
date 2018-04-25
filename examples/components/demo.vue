<template>
  <div>
    <slot name="desc"></slot>
    <div class="bd-example" :id="title">
      <slot name="demo"></slot>
    </div>
      <slot name="code"></slot>
  </div>
</template>
<script>

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
  }
</script>
