<template>
  <div id="list">
    <ul>
      <router-link tag="li" v-for="post in postContents.slice(listStart,listEnd)" :to="{ path: '/writings/' + post.id }" :key="post.id" @click="moveToDetail">
        <div class="thumb-wrap">
          <div class="thumb" v-bind:style="'background-image:url('+ post.url + ')'"></div>
        </div>
        <h3 class="title">{{ post.title }}</h3>
      </router-link>
    </ul>

  </div>

</template>

<script>

export default {
  props: ['postContents'],
  data() {
    return {
      listStart: 0,
      listEnd: 9
    }
  },
  created() {
    this.$EventBus.$on('current-view', (currentPage) => {
      this.listEnd = currentPage * 9;
      this.listStart = this.listEnd - 9;
    });
  },
  computed: {

  },
  methods: {
    moveToDetail() {
      this.$route.params.id = this.$data.id;
    }
  },
}
</script>

<style scoped>
#list {
  margin-top: 2vw;
  text-align: center;
}

#list ul {
  display: inline-block;
  margin: 0 auto;
  max-width: 1000px;
}

#list li {
  display: inline-block;
  vertical-align: top;
  width: 25vw;
  max-width: 300px;
  margin: 1vw;
  text-align: left;
}

.thumb-wrap {
  width: 100%;
  height: 25vw;
  max-height: 300px;
  overflow: hidden;
  margin-bottom: 10px;
}

.thumb {
  position: relative;
  text-align: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: all .5s;
}

.thumb-wrap:hover .thumb,
.thumb-wrap:focus .thumb {
  transform: scale(1.1);
}

#list .title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 13px;
  cursor: pointer;
}
</style>
