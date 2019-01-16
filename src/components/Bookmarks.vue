<template>
  <div id="bookmark-contents">
    <router-view :bookmark-contents="bookmarks"></router-view>
    <router-view name="pagination" :total-data="bookmarkCount"></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    bookmarkCount() {
      var _bookmarkCount;
      _bookmarkCount = this.bookmarks.length;
      return _bookmarkCount;
    }
  }
}
</script>

<style scoped>
</style>
