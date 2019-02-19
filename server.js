'use strict';

require('dotenv').config();
const cors = require('cors');

let geo = require('./data/geo.json');

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();


app.get('/location', (request, response) => {
  const locationData = searchToLatLong(request.query.data);
  response.send(locationData);
})

function searchToLatLong(place) {
  return {
    latitude: geo.results[0].geometry.location.lat,
    longitude: geo.results[0].geometry.location.lng
  }
}

searchToLatLong(); 
let asking = searchToLatLong();
console.log(asking);



//TODO:
// well want some error handling;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));