const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token fcba21c1ee86dc15bf7fc2bd1a06ce96f0a73905'
  }
});

//edycja gists
 client.patch('/gists/8623a2538b342052dc7859501d8176cf',{
    "description": "lista",
    "files": {
        "name.txt": {
        "content": "Mirek Nosek"
    }}
  })
  .then(function(response) {
    console.log(response.data)
  })
  .catch(function(error){
    console.log("error patch")
  })