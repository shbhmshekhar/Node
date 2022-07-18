const path = require('path');
const chalk = require('chalk');
const express = require('express');

const app = express();
const publicDirPath = path.join(__dirname, '../public');

app.use(express.static(publicDirPath));

// app.get('', (req, res) => {
//   res.send('<h1>Hello World from Express</h1>'); //send HTML back
//   //   res.send('Hello World from Express'); //send text
// });

// app.get('/help', (req, res) => {
//   //send JSON as a response
//   res.send({
//     name: 'Express App',
//     language_used: 'NodeJS, ExpressJS',
//   });
// });
// app.get('/about', (req, res) => {
//   // send html with CSS as a response
//   res.send(
//     '<h1 style="color: red">About page</h1><p>Details about the application</p>'
//   );
// });

app.get('/products', (req, res) => {
  console.log(req.query);
  if (!req.query.search) {
    return res.send({
      error: 'you must provide a search term',
    });
  }
  res.send({
    products: [],
  });
});

app.get('/weather', (req, res) => {
  //   res.send('Weather forecast is coming');
  if (!req.query.address) {
    return res.send({
      error: 'Address is required for a forecast',
    });
  }
  res.send({
    location: 'Bangalore,IN',
    temperature: '24',
    address: req.query.address,
  });
});

app.listen(3000, () => {
  console.log('Server running on port:3000');
});
