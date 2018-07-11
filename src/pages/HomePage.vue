<template lang="html">
  <div id="app-page-home">
    <app-component-postpre v-for="post, indx in posts" :post_data="post"></app-component-postpre>
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

<style lang="css">
</style>
