<template>
  <div id="login">
    <div>
      <input type="text" placeholder="ID">
      <input type="password" placeholder="Password">
      <input id="btn-login" class="btn" type="button" value="Sign in">
    </div>
  </div>
</template>

<script>
export default {

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
