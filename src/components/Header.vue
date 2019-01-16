<template>
  <header>
    <div id="btn-menu" @click="openMenu"><v-icon>$vuetify.icons.menu</v-icon></div>
    <div id="logo"><router-link :to="{ path: '/writings' }" ><span>9</span><span>9</span></router-link></div>
    <div id="font-wrap">
      <span class="change-font" @click="toggleFont">
        <i class="material-icons" :class="" v-if="showFont">cloud_queue</i>
        <i class="material-icons" v-else>cloud</i>
      </span>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'


export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      showFont: state => state.font.showFont
    })
  },
  methods: {
    toggleFont() {
      this.$store.commit('toggleFont')
    },
    openMenu() {
      this.$store.commit('toggleMenu')
    }
  }

}
</script>

<style scoped>

</style>
