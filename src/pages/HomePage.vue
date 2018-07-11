<template lang="html">
  <div id="app-page-home">
    <div id="home-postpre-container">
      <app-component-postpre v-for="post, indx in posts" :post_data="post"></app-component-postpre>
    </div>
  </div>
</template>

<script>
import PostPreview from '../components/PostPreview.vue'

export default {
  name: 'app-page-home',
  components: {
    'app-component-postpre': PostPreview
  },
  data () {
    return {
      posts: []
    }
  },
  created () {
    var vm = this
    this.$root.getAxios().get('/post')
      .then(res => {
        vm.posts = res.data
      }, err => {

      })
  }
}
</script>

<style lang="scss">
#app-page-home {

  #home-postpre-container {
    width: 80%;
    margin: 30px auto;
  }
}
</style>
