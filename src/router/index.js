import Vue from 'vue'
import Router from 'vue-router'
import Contents from '@/components/Contents'
import Writings from '@/components/Writings'
import WritingsList from '@/components/WritingsList'
import WritingsDetail from '@/components/WritingsDetail'
import Projects from '@/components/Projects'
import ProjectList from '@/components/ProjectList'
import Bookmarks from '@/components/Bookmarks'
import BookmarkList from '@/components/BookmarkList'
import Pagination from '@/components/Pagination'
import Login from '@/components/admin/Login'
import WritePost from '@/components/admin/WritePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'writings'
      }
    },
    {
      path: '/writings',
      name: 'writings',
      component: Writings,
      children: [{
        path: '/',
        components: {
          default: WritingsList,
          pagination: Pagination
        },
      }],
      props: (route) => ({query: route.query.page})
    },
    {
      path: '/writings/:id',
      name: 'details',
      component: WritingsDetail,
      props: true
    },
    {
      path: '/projects',
      component: Projects,
      children: [{
        path: '/',
        components: {
          default: ProjectList
        },
        props: true
      }],
    },
    {
      path: '/bookmarks',
      component: Bookmarks,
      children: [{
        path: '/',
        components: {
          default: BookmarkList,
          pagination: Pagination
        },
        props: {
          defulat: true,
          pagination: true
        }
      }],
    },
    {
      path: '/admin',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/write-post',
      name: 'writePost',
      component: WritePost,
    },

  ],
  mode: 'history'
})
