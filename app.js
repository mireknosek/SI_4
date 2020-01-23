const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token 2545a5d013008787faf875e6350be124ca8fba0f'
  }
});

//delete gists
client.delete('/gists/8623a2538b342052dc7859501d8176cf')
.then(function(response){
  console.log(response)
})
.catch(function(error){
  console.log("error")
})