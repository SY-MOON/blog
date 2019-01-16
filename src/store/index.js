import Vue from 'vue'
import Vuex from 'vuex'
import * as M from './mutation-types'

import postAPI from '../api/post'
import projectAPI from '../api/project'
import bookmarkAPI from '../api/bookmark'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPost: {},
    posts: [],
    projects: [],
    bookmarks: [],
    paging: {
      itemPerPage: 9,
      currentPage: 1,
      totalData: 0,
    },
    font: {
      showFont: true,
      altFont: false
    },
    menu: {
      openMenu: false,
    },
    auth: {
      user: {},
      token: null
    }
  },

  getters: {
    pages(state) {
      return Math.ceil(state.paging.totalData / state.paging.itemPerPage);
    },
    lastPage(state) {
      return state.paging.totalData % state.paging.itemPerPage;
    },
    lastPageGroup(state, getters) {
      return Math.floor(getters.pages / 10);
    },
    currentPageGroup(state) {
      return Math.floor((state.paging.currentPage - 1) / 10);
    },
    pageGroup(state, getters) {
      let _pageGroup = [];
      let p;
      for(var i = 1; i < 11; i++){
        p = i + getters.currentPageGroup * 10;

        if(p > getters.pages) break;
        _pageGroup.push(p);

      }
      return _pageGroup;
    },
  },

  mutations: {

    login(state, payload) {
      state.auth.user = payload.user
      state.auth.token = payload.token
    },
    toggleFont(state) {
      state.font.showFont = !state.font.showFont
      state.font.altFont = !state.font.altFont
    },
    //menu
    toggleMenu(state) {
      state.menu.openMenu = !state.menu.openMenu
    },
    //writings
    setPosts(state, payload) {
      state.posts = payload
    },
    setCurrentPost(state, item) {
      state.currentPost = item
    },
    setTotalCount(state, payload) {
      state.paging.totalData = payload
    },
    setCurrentPage(state, payload) {
      state.paging.currentPage = payload
    },
    //paging

    movePrev(state) {
      state.paging.currentPage = (this.getters.currentPageGroup) * 10
    },
    moveNext(state) {
      state.paging.currentPage = (this.getters.currentPageGroup + 1) * 10 +1
    },
  },

  actions: {

    movePage(ctx, {vm, pageNumber}) {

      console.log(ctx, pageNumber)
      postAPI.fetchPostsByPage(pageNumber)
      .then(result => {
        ctx.commit('setPosts', result.posts)
        ctx.commit('setTotalCount', result.totalCount)
        ctx.commit('setCurrentPage', pageNumber)
        vm.$router.replace({query: {page: pageNumber}})
      }).catch(e => {
        console.log(e)

        this.dispatch('movePage', {vm: vm, pageNumber: 1})

      })
    },

    currentPost(ctx, {vm, postId}) {
      postAPI.fetchPostById(postId)
      .then(result => {
        ctx.commit('setCurrentPost', result)
      })
      .catch(e => {
        console.log(e)
        vm.$router.replace('/')
      })
    },


    // increment(ctx) {
    //   setTimeout(()=>{
    //       ctx.commit(M.INCREMENT_COUNT_MUTATION)
    //   }, 2000);
    //
    // }
  },

})
