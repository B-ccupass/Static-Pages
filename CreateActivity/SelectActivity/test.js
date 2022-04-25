fetch('https://ragnapi.com/api/v1/old-times/monsters/1001')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });