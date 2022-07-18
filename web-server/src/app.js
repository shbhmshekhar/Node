const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Hello World from Express</h1>'); //send HTML back
  //   res.send('Hello World from Express'); //send text
});

app.get('/help', (req, res) => {
  //send JSON as a response
  res.send({
    name: 'Express App',
    language_used: 'NodeJS, ExpressJS',
  });
});
app.get('/about', (req, res) => {
  // send html with CSS as a response
  res.send(
    '<h1 style="color: red">About page</h1><p>Details about the application</p>'
  );
});
app.get('/weather', (req, res) => {
  //   res.send('Weather forecast is coming');
  res.send({
    location: 'Bangalore',
    temperature: '24',
  });
});

app.listen(3000, () => {
  console.log('Server running on port:3000');
});
