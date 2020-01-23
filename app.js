const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token 0c8a49955da8ebf9faeec750aa9926dd93037335'
  }
});