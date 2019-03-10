<template>
  <div id="bookmark-contents">
    <router-view></router-view>
    <router-view name="pagination"></router-view>
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
