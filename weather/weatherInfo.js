const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({url: `https://api.darksky.net/forecast/123056382ee9d00d0716d695fd1272b7/${lat},${lng}`,
  json:true},
   (error, response, body) => {

    if(error){
      callback('Unable to connect to forecast.io');
    } else if (response.statusCode === 400){
      callback('Unable to fetch weather');
    } else {

      callback(undefined, {
        summary: body.currently.summary,
        temperature: body.currently.temperature
      })

    }
  });
};



module.exports = {
  getWeather
}
