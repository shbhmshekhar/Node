const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('darbhanga', (error, { longitude, latitude, location } = {}) => {
  if (error) {
    return console.log(chalk.red.inverse(error));
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(chalk.red.inverse(error));
    }
    console.log('Location:', location);
    console.log('Forecast:', chalk.white.inverse(forecastData));
  });
});
