<template>

  <HeaderComponent />


  <div class="container mt-4">
    <router-view></router-view>
  </div>

</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';


export default {
  components: { HeaderComponent }
}
</script>

<style scoped>
body {
  cursor: url("./assets/cursor.png"), auto;
}

a {
  cursor: url("./assets/cursor.png"), auto;
}
</style>
