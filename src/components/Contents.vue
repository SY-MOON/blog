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
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '첫 번째 포스팅',
          contents: '대통령의 선거에 관한 사항은 법률로 정한다. 국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. <br> 대통령은 국가의 안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의 효력을 가지는 명령을 발할 수 있다.'
        },
        {
          id: '3',
          date: '2018.12.14',
          url : 'https://images.pexels.com/photos/1654493/pexels-photo-1654493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '두 번째 포스팅',
          contents:'두번쨰 내'
        },
        {
          id: '21',
          date: '2018.12.14',
          url : 'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '세 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '24',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '네 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '35',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '다 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '15',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '여 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '214',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '일 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '314',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '여덟 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '153',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '아홉 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '1533',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '열ㄷㅏ음페이지 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '153232',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '하9ㄷㅏ음페이지 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '21532525',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '첫 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '3235235252',
          date: '2018.12.14',
          url : 'https://images.pexels.com/photos/1654493/pexels-photo-1654493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '두 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '212352352',
          date: '2018.12.14',
          url : 'https://images.pexels.com/photos/1647214/pexels-photo-1647214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          title : '세 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '2423525235',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '네 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '35253532',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '다 번째 포스팅',
          contents:'두번쨰 내용'
        },
        {
          id: '1525235',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '여 번째 포스팅쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜쩜',
          contents:'두번쨰 내용'
        },
        {
          id: '21413525',
          date: '2018.12.14',
          url : 'https://image.freepik.com/free-photo/beautiful-composition-with-palm-leaves-on-yellow-background_24972-68.jpg',
          title : '일 번째 포스팅',
          contents:'두번쨰 내용'
        },
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
