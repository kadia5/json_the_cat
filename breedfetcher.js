const request = require('request');
const catBreed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const  catBody = JSON.parse(body);
  console.log('body:', catBody[0].description); // Print the HTML for the Google homepage.
  console.log(typeof catBody);

});


//process.argv[] same thing as above ith slice 2