const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api.github.com/',
  responseType: 'json',
  headers: {
    'Authorization': 'token bbac62ff1821204eeb2a2fb3edff4aad1cad427b'
  }
});

//tworzenie gists
client.post('/gists', {
  description: "lista",
  public: true,
  files: {"name.txt": {content:"Mirek"}}
})
  .then(function(response) {
    console.log('ok')
  })
  .catch(function(error) {
    console.log(erro);
  })
