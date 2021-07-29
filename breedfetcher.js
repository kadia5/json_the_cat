const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const descr = JSON.parse(body);
    if (error) {
      callback(error ,null);
    } else if(descr[0] === undefined){
      callback("invalid breed", null);
    
    }else{
      
      callback(null, descr[0].description);
    }
 
  });

};


module.exports = {
  fetchBreedDescription,
};