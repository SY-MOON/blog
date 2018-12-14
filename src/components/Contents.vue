<template>
  <div id="contents">
    <router-view :post-contents="posts"></router-view>
    <router-view name="pagination" :total-data="postCount"></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: '2',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '첫 번째 포스팅'
        },
        {
          id: '3',
          url : 'https://images.pexels.com/photos/1654493/pexels-photo-1654493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '두 번째 포스팅'
        },
        {
          id: '21',
          url : 'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '세 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜'
        },
        {
          id: '24',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '네 번째 포스팅'
        },
        {
          id: '35',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '다 번째 포스팅'
        },
        {
          id: '15',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '여 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜'
        },
        {
          id: '214',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '일 번째 포스팅'
        },
        {
          id: '314',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '여덟 번째 포스팅'
        },
        {
          id: '153',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '아홉 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜'
        },
        {
          id: '1533',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '열ㄷㅏ음페이지 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜'
        },
        {
          id: '153232',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '하9ㄷㅏ음페이지 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜'
        }
      ],
    }
  },
  computed: {
    postCount() {
      var _postCount;
      _postCount = this.posts.length;
      return _postCount;
    }
  }
}
</script>

<style scoped>
#contents {
  display: inline-block;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: #f8f8f8;
  box-sizing: border-box;
  padding: 50px 20px;
}
</style>
