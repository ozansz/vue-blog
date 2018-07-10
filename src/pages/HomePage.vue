<template lang="html">
  <div id="app-page-home">
    <app-component-postpre v-for="post, indx in posts" :post_data="post" :data-indx="indx"></app-component-postpre>
  </div>
</template>

<script>
export default {
  name: 'app-page-home',
  data: {
    posts: []
  },
  created () {
    var vm = this
    $root.getAxios().get('/post')
      .then(res => {
        vm.posts = res.data.posts
      }, err => {

      })
  }
}
</script>

<style lang="css">
</style>
