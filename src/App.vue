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
      openMenu: false,
      altFont: false
    }
  },
  created() {
    this.$EventBus.$on('open-menu', () => {
      this.openMenu = !this.openMenu;
    });

    this.$EventBus.$on('close-menu', () => {
      this.openMenu = !this.openMenu;
    });

    this.$EventBus.$on('change-font', () => {
      this.altFont = !this.altFont;
    });
  }
}

</script>

<style>
#app {
  height: 100%;
}
</style>
