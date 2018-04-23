<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/input">input</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{

  }
}
</script>
