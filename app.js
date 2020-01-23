const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token cad204179aaeb0ac865efa9c78e5959d0c9abd62'
  }
});

//utworzenie star
  client.put('/gists/8623a2538b342052dc7859501d8176cf/star', {
    'star': {
      headers:{
        'Content-Lenght': 0
    }}
    }).then(function(response){
        console.log("ok")
      })
      .catch(function(error){
        console.log("error")
      })