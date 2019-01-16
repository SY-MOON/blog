<template>
  <div id="editor">

    <input v-model.trim="title" placeholder="제목을 입력하세요."></input>
    <vue-editor id="post-editor"
      useCustomImageHandler
      @imageAdded="handleImageAdded"
      v-model="content"></vue-editor>

      <button @click="saveContent">저장하기</button>

  </div>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
import axios from 'axios'
import postAPI from '../../api/post'
import firebase from 'firebase'

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      title: '',
      content: '',
      thumb: ''
    }
  },
  computed: {
    isValidTitle() {
      return this.title.length > 0
    },
    isValidContent() {
      return this.content.length > 0
    },


  },

  methods: {
    handleImageAdded(file, editor, cursorLocation, resetUploader) {

      let storageRef = firebase.storage().ref();
      let uploadTask = storageRef.child('images/' + (Date.now()) + file.name).put(file)
      uploadTask.on('state_changed', snapshot => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, error => {
        // Handle unsuccessful uploads
        console.log(error)
      }, () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('File available at', downloadURL);

          let url = downloadURL
          editor.insertEmbed(cursorLocation, 'image', url)
          resetUploader();
          if(this.thumb == '') {
            this.thumb = url
          }
        });

      })

    },

    saveContent: function() {

      if(!this.isValidTitle) return alert('님.. 제목')
      if(!this.isValidContent) return alert('님.. 하얀백지가..')

      postAPI.post({
        contents: this.content,
        title: this.title,
        thumb: this.thumb
      })
      .then(r => {
        console.log('save complete! : ' + r)
        this.$store.commit('setTotalCount', r.totalCount)
        this.$router.push({
          name: 'details',
          params: { id: r.postInfo.pid }
        })

      })
      .catch(e => {
        console.log(e)
        alert(e)
      })

    },

  },



}
</script>

<style scoped>

</style>
