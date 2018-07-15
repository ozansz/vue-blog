<template lang="html">
  <div class="app-component-postpre">
    <img v-if="post_data.use_img" :src="post_data.image_url[0]">
    <div class="pre-header">{{ post_data.title }}</div>
    <div class="pre-ts">Posted by {{ post_data.author }} on {{ normalized_date }}</div>
    <div class="pre-content">{{ normalized_text }}</div>
    <router-link :to="'/post/' + post_data.id.toString()">Continue reading</router-link>
  </div>
</template>

<script>
export default {
  name: 'app-component-postpre',
  props: [
    'post_data'
  ],
  data () {
    return {
      normalized_date: undefined
    }
  },
  watch: {
    post_data (_new) {
      this.normalize()
    }
  },
  mounted () {
    this.normalize()
  },
  methods: {
    normalize () {
      this.normalized_date = new Date(this.post_data.ts).toDateString()
      if (this.post_data.text.length > 168) {
        this.normalized_text = this.post_data.text.slice(0, 169) + ' ...'
      }
    }
  }
}
</script>

<style lang="scss">
.app-component-postpre {
  position: relative;
  text-align: center;
  color: #27292B;
  padding-bottom: 25px;
  background-color: #fff;
  margin-bottom: 40px;

  img {
    width: 100%;
    height: auto;
  }
  .pre-header {
    font-family: 'Lora', serif;
    font-size: 37px;
    padding-top: 18px;
    margin-bottom: 6px;
  }
  .pre-ts {
    font-size: 14px;
  }
  .pre-content {
    font-size: 16px;
    width: 85%;
    margin: 25px auto;
  }
  .pre-content, .pre-ts {
    font-family: 'Lato', sans-serif;
  }
  a {
    color: #27292B;
  }
}
@media only screen and (min-width: 768px) {
  .app-component-postpre .pre-header {
    font-size: 51px;
  }
}
@media only screen and (max-width: 768px) {
  .app-component-postpre {
    margin-bottom: 24px;
  }
}
</style>
