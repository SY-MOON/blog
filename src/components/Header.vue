<template>
  <header>
    <div id="btn-menu" @click="openMenu"><i class="fas fa-bars"></i></div>
    <div id="logo"><router-link :to="{ path: '/writings' }" ><span>9</span><span>9</span></router-link></div>
    <div id="font-wrap">
      <span class="change-font" @click="toggleFont">
        <i class="far fa-smile" :class="" v-if="showFont"></i>
        <i class="fas fa-smile" v-else></i>
      </span>
    </div>
  </header>
</template>

<script>


export default {
  data() {
    return {
      showFont: true
    }
  },
  methods: {
    toggleFont() {
      this.showFont = !this.showFont;
      this.$EventBus.$emit('change-font');
    },
    openMenu() {
      this.$EventBus.$emit('open-menu');
    }
  }

}
</script>

<style scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 55px;
  line-height: 55px;
  font-size: 20px;
  padding: 0 20px;
  box-sizing: border-box;
}

header > * {
  position: relative;
  z-index: 10;
  display: inline-block;
}

#logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  text-align: center;
  font-size: 36px;
}

#logo span {
  font-weight: bold;
}

#font-wrap {
  position: absolute;
  right: 20px;
  top: 0;
}
</style>
