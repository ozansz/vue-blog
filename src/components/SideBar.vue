<template lang="html">
  <div class="app-component-sidebar">

  </div>
</template>

<script>
export default {
  name: 'app-component-sidebar'
}
</script>

<style lang="scss">
.app-component-sidebar {
  height: 100vh;
  width: 74.285%;
  margin-left: auto;
  background-color: #fff;
}
@media only screen and (min-width: 1467px) {
  .app-component-sidebar {
    width: calc(350px - 8%);
  }
}
</style>
