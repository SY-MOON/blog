<template>
  <div id="project-wrap">
    <ul>
      <router-link to=":id" tag="li" class="project" v-for="project in projects" :to="{ path: '/projects/' + project.id }" :key="project.id" @click="moveToDetail">
        <div class="project-number">{{ project.index }}</div>
        <img class="project-img" :src="project.url">
        <h2 class="project-title">{{ project.title }}</h2>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: '2',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '사람들은 어떤 뉴스를 볼까요'
        },
        {
          id: '3',
          url : 'https://images.pexels.com/photos/1654493/pexels-photo-1654493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '두번째 프로젝트입니다 따다'
        },
        {
          id: '21',
          url : 'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '프로젝트!!!!!!!!'
        }
      ],
    }
  },
  methods: {
    moveToDetail() {
      this.$route.params.id = this.$data.id;
    }
  }
}
</script>

<style scoped>
#project-wrap {
  width: calc(100vw - 480px);
  position: relative;
  margin: 0 auto;
  margin-top: 100px;
}

.project {
  position: relative;
  text-decoration: none;
  border-top: 1px solid #4A4A4A;
  min-height: 400px;
  display: block;
  float: left;
  width: calc((100% - 90px)/2);
}

.project:nth-child(2) {
  margin-top: 100px;
}

.project:nth-child(2n) {
  float: right;
}

.project-img {
  opacity: 0;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  padding-top: 50px;
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  opacity: 0;
  pointer-events: none;
}

.project:hover .project-img {
  opacity: 0.6;
}

.project-title {
  font-size: 30px;
  padding-bottom: 50px;
  margin-top: 20px;
  margin-left: -0.06em;
}
</style>
