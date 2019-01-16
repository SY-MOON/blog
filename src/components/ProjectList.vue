<template>
  <div id="project-wrap">
    <ul>
      <li v-for="(project, index) in projects" :key="index">
        <router-link :to="{ name: 'details', params: {id: project.id, contents: project }}"  class="project">
          <div class="project-number">{{ project.index }}</div>
          <img class="project-img" :src="project.url">
          <h2 class="project-title">{{ project.title }}</h2>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      projects: state => state.projects
    })
  },
  methods: {
    moveToDetail() {
      //this.$route.params.id = this.$data.id;
    }
  }
}
</script>

<style scoped>

</style>
