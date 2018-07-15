<template lang="html">
  <div class="app-component-topnavbar">
    <p>Blog</p>
    <div class="tnb-btn-container">
      <i class="fa fa-navicon" style="font-size:24px"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-component-topnavbar'
}
</script>

<style lang="scss">
.app-component-topnavbar {
  height: 71px;
  background-color: #fff;
  color: #27292B;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  display: flex;

  p {
    position: absolute;
    left: 37px;
    top: 6px;
  }

  .tnb-btn-container {
    position: absolute;
    padding: 7px;
    border: 1px solid;
    right: 22px;
    top: 16px;
  }
}
</style>
