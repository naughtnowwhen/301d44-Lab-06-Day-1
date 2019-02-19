'use strict';

require('dotenv').config();
// const cors = require('cors');



const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();



app.get('/location', (request, response) => {
  const locationData = searchToLatLong(request.query.data);
  response.send(locationData);
})

function searchToLatLong(place) {
  let geo = require('./data/geo.json');
  const location = new Location(place, geo);
  return location;
}

function Location(query, res) {
  this.search_query = query;
  this.formatted_query = res.results[0].formatted_address;
  this.latitude = res.results[0].geometry.location.lat;
  this.longitude = res.results[0].geometry.location.lng;
}

//TODO:
// well want some error handling;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));