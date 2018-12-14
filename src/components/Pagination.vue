<template>
  <ul id="pagination">
    <li class="prev" @click="movePrev">Prev</li>
    <li class="page" v-for="pageNumber in pageGroup" v-if="" @click="movePage(pageNumber)" :class="pageNumber == currentPage?'selected':''">{{ pageNumber }}</li>
    <li class="next" @click="moveNext">Next</li>
  </ul>
</template>

<script>
export default {
  props: ['totalData'],

  data() {
    return {
      itemPerPage: 9,
      pages: 0,
      lastPage: 0,
      currentPage: 1,
      currentPageGroup: 0,
      startRange: 1,
      endRange: 10,
      lastPageGroup: 0,
    }
  },
  created() {
    // this.$EventBus.$on('total-data', (total) => {
    //   this.totalData = total;
    // });

    //총 페이지 수 계산
    this.pages = Math.ceil(this.totalData / this.itemPerPage);

    this.lastPage = this.totalData % this.itemPerPage;
    //마지막 페이지 그룹 계산
    this.lastPageGroup = Math.floor(this.pages/10);

    //현재 속한 그룹 계산
    this.currentPageGroup = Math.floor(this.currentPage/10);


  },
  computed: {
    pageGroup() {
      var _pageGroup = [];
      var p;
      for(var i = 1; i < 11; i++){
        p = i + this.currentPageGroup * 10;

        if(p > this.pages) break;
        _pageGroup.push(p);
      }
      return _pageGroup;
    },
  },

  methods: {
    movePage(pageNumber) {
      this.currentPage = pageNumber;
      this.$EventBus.$emit('current-view', this.currentPage);
    },
    movePrev() {
      if(this.currentPage > 10) {
        this.currentPageGroup--;
        this.currentPage = this.currentPageGroup * 10 + this.endRange;
      }
    },
    moveNext() {
      if(this.currentPageGroup < this.lastPageGroup) {
        this.currentPageGroup++;
        this.currentPage = this.currentPageGroup * 10 + this.startRange;
      }
    },
  },

  updated() {

  }
}

</script>

<style>
#pagination {
  text-align: center;
  margin-top: 50px;
}

#pagination li {
  font-size: 12px;
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 2px;
  border: 1px solid transparent;
}

#pagination li.prev,
#pagination li.next {
  width: auto;
}

#pagination li:disabled {
  cursor: default;
}

#pagination li.page.selected,
#pagination li.page:hover {
  font-weight: bold;
  color: red;
  border-color: red;
}
</style>
