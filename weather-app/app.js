const API_KEY = require('./apikey');
const request = require('request');
const chalk = require('chalk');

const placeName = 'Bangalore';
const weatherServiceUrl = `http://api.weatherstack.com/current?access_key=${API_KEY.WEATHER_STACK_API_KEY}&query=${placeName}`;
const geoCodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${placeName}.json?proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${API_KEY.MAP_BOX_API_KEY}`;

request({ url: weatherServiceUrl, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red.inverse('Unable to connect to weather Service'));
  } else {
    console.log(response.body.current);
  }
});

request({ url: geoCodeUrl, json: true }, (error, response) => {
  if (error) {
    console.log(chalk.red.inverse('Unable to connect to geolocation Service'));
  } else {
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];
  }
});
