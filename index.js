const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv.slice(2);

//process.argv[] same thing as above ith slice 2

fetchBreedDescription(breedName, (error, body) => {
  
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(body);
  }
  console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // const  catBody = JSON.parse(body);

  // console.log('body:', catBody[0].description); // Print the HTML for the Google homepage.
  // console.log(typeof catBody);
  

});
// fetchBreedDescription(null, "Siberian" )


  