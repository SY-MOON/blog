<template>
  <div id="login">
    <div>
      <!-- <input type="text" placeholder="ID">
      <input type="password" placeholder="Password"> -->
      <input @click="signin" id="btn-login" class="btn" type="button" value="Sign in">
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {


  methods: {
    signin() {
      var provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider).then((result) => {

        console.log(result)

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        this.$store.commit('login', {
          user,
          token
        })

        this.$router.push({
          path: '/admin/write-post'
        })


        // ...
      }).catch(function(error) {

        console.log(error)

        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
    }
  },

}
</script>

<style scoped>
#login {
  margin-top: 100px;
  text-align: center;
}

#login > div {
  display: inline-block;
}

#login input {
  display: block;
  width: 200px;
  height: 35px;
  line-height: 35px;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #cccccc;
  background-color: #ffffff;
  outline: none;
  padding: 0 20px;
  margin: 5px 0;
  box-sizing: border-box;
}

#login .btn {
  margin-top: 30px;
  background-color: #424242;
  color: #ffffff;
  border-color: #424242;
  border-radius: 2px;
  font-weight: bold;
}
</style>
