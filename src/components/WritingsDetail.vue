<template>
  <div id="detail">
    <h2>{{post.title}}</h2>
    <span class="date">{{post.date}}</span>
    <div class="box">
      <p v-html="post.contents"></p>
    </div>
    <div class="btn-back" @click="$router.go(-1)">Back</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['id'],
  computed: {
    ...mapState({
      post: state => state.currentPost
    })
  },
  created() {
    this.$store.dispatch('currentPost', {vm: this, postId: this.id})
  }
}
</script>

<style scoped>
#detail {
  width: 90%;
  max-width: 980px;
  position: relative;
  margin: 0 auto;
}

#detail h2 {
  font-size: 26px;
  word-break: keep-all;
  line-height: 1.5;
}

#detail .date {
  font-size: 12px;
  line-height: 2;
}

.box {
  background-color: #f6f7fb;
  padding: 25px;
  margin: 20px 0;
  border-radius: 2px;
  /* box-shadow: 0 0 10px 1px rgba(0,0,0,0.1); */
}

.box .img-wrap {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.box .img-wrap img {
  width: 100%;
}

.box p {
  margin-top: 20px;
  font-size: 14px;
  line-height: 2;
  word-break: keep-all;
  text-indent: 14px;
}

.btn-back {
  cursor: pointer;
}

.btn-back:hover {
  font-weight: bold;
}
</style>
