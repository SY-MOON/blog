<template>
  <transition name="fade" class="dim">
    <div id="menu" class="dim" @click="closeMenu">
      <ul class="menu-wrap" @click.stop>
        <router-link tag="li" :to="{ path: '/writings' }" >
          <div @click="closeMenu">글<span>Writings</span></div>
        </router-link>
        <router-link tag="li" :to="{ path: '/projects' }">
          <div @click="closeMenu">일<span>Projects</span></div>
        </router-link>
        <router-link tag="li" :to="{ path: '/bookmarks' }">
          <div @click="closeMenu">갈피<span>Bookmarks</span></div>
        </router-link>
      </ul>
    </div>
  </transition>
</template>

<script>
import WritingsList from './WritingsList.vue'
import ProjectList from './ProjectList.vue'
import Bookmarks from './Bookmarks.vue'

export default {
  methods: {
    closeMenu() {
      this.$EventBus.$emit('close-menu');
    }
  }
}
</script>

<style scoped>
#menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
}

.dim {
  background-color: rgba(0,0,0,0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 150;
  width: 100%;
  height: 100%;
}

.menu-wrap {
  width: 200px;
  height: 100%;
  background-color: #ffffff;
  padding: 50px 20px;
  box-sizing: border-box;
}

.menu-wrap li {
  line-height: 3;
  font-weight: normal;
  cursor: pointer;
}

.menu-wrap li:hover {
  font-weight: bold;
}

.menu-wrap li span {
  font-size: small;
  margin-left: 5px;
  font-weight: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
