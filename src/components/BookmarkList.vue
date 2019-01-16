<template>
  <div id="list">
    <ul>
      <li v-for="(bookmark,index) in bookmarkContents.slice(listStart,listEnd)" :key="index">
        <router-link  :to="{ name: 'details', params: { id: bookmark.id } }">
          <div class="thumb-wrap" >
            <div class="thumb" v-bind:style="'background-image:url('+ bookmark.url + ')'"></div>
          </div>
          <h3 class="title">{{ bookmark.title }}</h3>
          <p>{{bookmark.url}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['bookmarkContents'],
  created() {
    this.$EventBus.$on('current-view', (currentPage) => {
      this.listEnd = currentPage * 9;
      this.listStart = this.listEnd - 9;
    });

  },
}
</script>

<style scoped>

</style>
