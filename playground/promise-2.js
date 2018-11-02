const request = require('request');

var geoCode = (address) => {

  return new Promise((resolve,reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({url: `http://www.mapquestapi.com/geocoding/v1/address?key=Pnuu6xucnSv9g4h8YAdAksrXD8czJXvL&location=${encodedAddress}`,
    json:true},
     (error, response, body) => {
       if(error){
         reject('Unable to connect to mapquestapi.com');
       } else if (response.statusCode === 400){
         reject('Unable to fetch co-ordinates');
       } else {

         resolve({
           address: address,
           lat: body.results[0].locations[0].latLng.lat,
           lng: body.results[0].locations[0].latLng.lat
         });
       }
     });
  });
};

var getWeather = (lat, lng) => {
  return new Promise ((resolve, reject) => {
    request({url: `https://api.darksky.net/forecast/123056382ee9d00d0716d695fd1272b7/${lat},${lng}`,
    json:true},
     (error, response, body) => {

      if(error){
        console.log('Error received from darksky: \n', error);
        reject('Unable to connect to forecast.io');
      } else if (response.statusCode === 400){
        console.log('Error received from darksky: \n', error);
        reject('Unable to fetch weather');
      } else {

        resolve( {
          summary: body.currently.summary,
          temperature: body.currently.temperature
        })

      }
    });
  });
};

geoCode('131 kuala Mona bay honolulu').then ((res) => {
  console.log(JSON.stringify(res, undefined, 2));
  console.log('Printing address :', res.address);
  console.log('Printing latitude :', res.lat);
  console.log('Printing lonitude  :', res.lng);

  getWeather(res.lat, res.lng).then ((res) => {
    console.log(JSON.stringify(res, undefined, 2));
  }, (err) => {
    console.log(err);
  });

}, (err) => {
  console.log('Error: ', err);
});
