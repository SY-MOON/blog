<template>
  <ul id="pagination">
    <li class="prev" @click="movePrev">Prev</li>
    <li class="page" v-for="(pageNumber,index) in pageGroup" :key="index" @click="hander(pageNumber)" :class="pageNumber == currentPage?'selected':''">{{ pageNumber }}</li>
    <li class="next" @click="moveNext">Next</li>
  </ul>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      target: 0,
      duration: 300,
      offset: 0
    }
  },
  computed: {
    ...mapState({
      currentPage: state => state.paging.currentPage,
    }),
    ...mapGetters([
      'pageGroup',
      'currentPageGroup',
      'lastPageGroup',
    ]),
  },

  methods: {
    movePage(pageNumber) {
      this.$store.dispatch('movePage', {vm: this, pageNumber: pageNumber})
    },
    movePrev() {
      if(this.currentPage > 10) {
        this.$store.commit('movePrev')
      }
    },
    moveNext() {
      if(this.currentPageGroup < this.lastPageGroup) {
        this.$store.commit('moveNext')
      }
    },
    hander(pageNumber) {
      this.movePage(pageNumber)
      this.$vuetify.goTo(this.target, this.options)
    }
  },
}

</script>

}

</script>

<style>

</style>
