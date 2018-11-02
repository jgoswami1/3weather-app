const axios = require('axios');
const yargs = require('yargs');

var argv = yargs.argv;
console.log('argv:          ',argv);

var encodedAddress = encodeURIComponent(argv.a);
var geoCodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=Pnuu6xucnSv9g4h8YAdAksrXD8czJXvL&location=${encodedAddress}`;

var lat;
var lng;

axios.get(geoCodeUrl).then((response) => {
  //throw new Error('Unable to find that address');
  //console.log(JSON.stringify(response.data, undefined, 2));
  lat = response.data.results[0].locations[0].latLng.lat;
  lng = response.data.results[0].locations[0].latLng.lng;
  console.log(lat);
  console.log(lng);
}).catch((error) => {
  console.log('Error :',error);
});

var weatherURL = `https://api.darksky.net/forecast/123056382ee9d00d0716d695fd1272b7/${lat},${lng}`;

axios.get(weatherURL).then((response) => {
  //throw new Error('Unable to find that address');
  console.log(JSON.stringify(response.data, undefined, 2));

}).catch((error) => {
  console.log('Error :',error);
});
