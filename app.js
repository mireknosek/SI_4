const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token 1993c2488193763e68d97604375743c2631c1677'
  }
});

//commits
client.get('gists/8623a2538b342052dc7859501d8176cf/commits')
.then(function(response){
  console.log(response)
 })
 .catch(function(error){
   console.log("error")
 })