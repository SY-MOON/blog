<template>
  <div id="post-contents">
    <router-view></router-view>
    <router-view v-if="totalData > 0" name="pagination"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['query'],
  computed: {
      ...mapState({
        totalData: state => state.paging.totalData
      }),
  },
  created() {

    let curPage = Number.parseInt(this.query)
    if(isNaN(curPage)) curPage = 1

    this.$store.dispatch('movePage', {vm: this, pageNumber: curPage})

  }
}
</script>

<style scoped>

</style>
