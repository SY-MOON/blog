<template>
  <div id="app" :class=" altFont == true ? 'alt-font':'' ">
    <Header></Header>
    <Contents>
    </Contents>
    <Menu v-if="openMenu"></Menu>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Contents from './components/Contents.vue'
import Menu from './components/Menu.vue'
import Login from './components/admin/Login.vue'

import { mapState } from 'vuex'
import * as M from './store/mutation-types'

export default {
  name: 'App',
  components: {
    'Header': Header,
    'Contents': Contents,
    'Menu': Menu,
    'Login': Login
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      openMenu: state => state.menu.openMenu,
      altFont: state => state.font.altFont
    }),
  },
  created() {
  }
}

</script>

<style>
#app {
  height: 100%;
}
</style>
