<template>
  <v-app id="list">
    <v-container  grid-list-xl grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm12 lg4 xl4 md4 v-for="(post,index) in posts" :key="index" class="card">
          <router-link :to="{ name: 'details', params: { id: post.id } }">
            <v-responsive :aspect-ratio="1/1">
              <div class="thumb-wrap">
                <div class="thumb" v-bind:style="'background-image:url('+ post.url + ')'"></div>
              </div>
            </v-responsive>
            <h3 class="">{{ post.title }}</h3>
          </router-link>
        </v-flex>
      </v-layout>
      <div class="no-result" v-if="totalData == 0">아직 등록된 글이 없습니다:)</div>
    </v-container>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import Vuetify from 'vuetify'

export default {
  
  computed: {
    ...mapState({
      posts: state => state.posts,
      totalData: state => state.totalData,
    }),
    ...mapState([
    ])
  },
  methods: {
    
  },
  created() {

  },
}
</script>

<style scoped>
</style>
