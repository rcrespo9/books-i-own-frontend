import axios from 'axios'

const baseURL = 'https://books-i-own-api.herokuapp.com'

export default {
  createAuthor (authorInfo, token) {
    return axios.post(`${baseURL}/authors`, authorInfo, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  }
}
