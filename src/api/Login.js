import axios from 'axios'

export default {
  login (credentials) {
    return axios.post('https://books-i-own-api.herokuapp.com/login', credentials)
  }
}
