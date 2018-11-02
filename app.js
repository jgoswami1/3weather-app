//const request = require('request');
//This is juts an edit in Git
const yargs = require('yargs');

const geocode_lib = require('./geocode/geocode_lib');
const weatherInfo = require('./weather/weatherInfo');

var argv = yargs.argv;
console.log('argv:          ',argv);

geocode_lib.getAddress(argv.address, (errorMessage, results) => {
if(errorMessage){
  console.log ('errorMessage: ', errorMessage);
} else {
  console.log(JSON.stringify(results, undefined, 2));
  weatherInfo.getWeather(results.lat,results.lng, (errorMsg, weatherResults) => {
    if(errorMsg){
      console.log ('errorMsg: ', errorMsg);
    } else {
      console.log(JSON.stringify(weatherResults, undefined, 2));
    }
    });
}
});
