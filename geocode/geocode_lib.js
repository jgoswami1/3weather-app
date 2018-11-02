const request = require('request');

var getAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);

  request({url: `http://www.mapquestapi.com/geocoding/v1/address?key=Pnuu6xucnSv9g4h8YAdAksrXD8czJXvL&location=${encodedAddress}`,
  json:true},
   (error, response, body) => {
     if(error){
       callback('Unable to connect to mapquestapi.com');
     } else if (response.statusCode === 400){
       callback('Unable to fetch co-ordinates');
     } else {

       callback(undefined, {
         lat: body.results[0].locations[0].latLng.lat,
         lng: body.results[0].locations[0].latLng.lat
       });
     }
   });
 };




module.exports = {
  getAddress
}
