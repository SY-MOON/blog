<template>
  <div id="detail">
    <h2>{{post.title}}</h2>
    <span id="date">{{post.date}}</span>
    <div>
      <img :src="post.url">
    </div>
    <p>{{post.contents}}</p>
  </div>
</template>

<script>
export default {
  name: 'details',
  data() {

    return {
      postId: this.$route.params.id,
      post: this.$route.params.contents
    }
  },
  created() {
    console.log(this.$route.params.id, this.$route.params.contents)
  }
}
</script>

<style scoped>
#detail {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 3px;
}
</style>
