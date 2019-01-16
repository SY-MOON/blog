import axios from 'axios'


let rawData = []
let totalCount, totalPages
const numPerPage = 9

let promise = axios.get('/static/json/posts.json')
.then(result=>{
  //console.log(result.data)
  postAPI.setRawData(result.data)
})

function _fetchPost(pageNumber) {
  let endNum = (pageNumber) * numPerPage
  let startNum = endNum - numPerPage

  const r = rawData.slice(startNum, endNum)
  // console.log('_fetchPost', rawData, startNum, endNum, r)
  return r;
}

// function searchId(val, arr) {
//   for(var i = 0; i < arr.length; i++) {
//     if(arr[i] == val) {
//
//       return arr[i]
//     }
//   }
//
// }

const postAPI = {

  setRawData(data) {
    rawData = data
    totalCount = rawData.length
    totalPages = Math.ceil(totalCount / numPerPage)
  },

  getTotalCount() {
    return rawData.length
  },

  fetchPostsByPage(pageNumber) {
    return new Promise((resolve, reject) => {
      promise.then(()=>{
        let r = _fetchPost(pageNumber)
        if(pageNumber > totalPages) return reject('Not exists page number.')

        setTimeout(()=>{
          resolve({
            totalCount: rawData.length,
            posts: r
          });
        }, 300);
      })
    })

  },

  fetchPostById(postId) {
    return new Promise((resolve, reject) => {

      axios.get('http://localhost:5000/sy-blog-29489/us-central1/getPost?pid=' + postId)
      .then(r=>{
        resolve(r.data)
      })
      .catch(e=>{
        reject(e)
      })
    })
  },

  post(post) {
    return new Promise((resolve, reject) => {

        axios.post('http://localhost:5000/sy-blog-29489/us-central1/writePost', post)
        .then(r=>{
            console.log(r.data)
            resolve(r.data)
        })
        .catch(e=>{
            reject(e)
        })
    })
  },

}

export default postAPI
