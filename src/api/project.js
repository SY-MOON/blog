import axios from 'axios'


let rawData = []

// let promise = axios.get('/static/json/projects.json')
// .then(result => {
//   console.log(result.data)
//   projectAPI.setRawData(result.data)
// })

const projectAPI = {

  setRawData(data) {
    rawData = data
  },

  fetchProjects() {
    return new Promise((resolve, reject) => {
      promise.then(() => {
        resolve({

        })
      })
    })
  }



}

export default projectAPI
