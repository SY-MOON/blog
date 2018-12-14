import Vue from 'vue'
import Router from 'vue-router'
import Contents from '@/components/Contents'
import WritingsList from '@/components/WritingsList'
import WritingsDetail from '@/components/WritingsDetail'
import ProjectList from '@/components/ProjectList'
import Bookmarks from '@/components/Bookmarks'
import Pagination from '@/components/Pagination'
import Login from '@/components/admin/Login'
import Editor from '@/components/admin/Editor'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WritingsList,
    },
    {
      path: '/writings',
      components: {
        default: WritingsList,
        pagination: Pagination
      },
      props: {
        defulat: true,
        pagination: true
      }
    },
    {
      path: '/writings/new',
      component: Editor
    },
    {
      path: '/writings/:id',
      component: WritingsDetail
    },
    {
      path: '/projects',
      component: ProjectList
    },
    {
      path: '/bookmarks',
      components: {
        default: Bookmarks,
        pagination: Pagination
      }
    },
    {
      path: '/admin',
      name: 'Login',
      component: Login
    },

  ],
  mode: 'history'
})
