/* eslint-disable new-cap, no-console */

import express from 'express';
const router = module.exports = express.Router();
import Person from '../models/person';
import City from '../models/city';
import Country from '../models/country';

router.get('/', (req, res) => {
  City.find((cityerr, cities) => {
    Country.find((countryerr, countries) => {
      res.render('admin', { cities, countries });
    });
  });
});

router.post('/newUser', (req, res) => {
  console.log('newUser is running', req.body);
  const myUser = new Person(req.body);
  myUser.save((err) => {
    if (err) { console.log(err); }
    console.log('save response object', res.body);
    res.send(myUser);
  });
});

router.post('/newCity', (req, res) => {
  console.log('new city is running', req.body);
  const myCity = new City(req.body);
  myCity.save((err) => {
    if (err) { console.log(err); }
    console.log('save response object', res.body);
    res.send(myCity);
  });
});

router.post('/newCountry', (req, res) => {
  console.log('newcountry is running', req.body);
  const myCountry = new Country(req.body);
  myCountry.save((err) => {
    if (err) { console.log(err); }
    console.log('save response object', res.body);
    res.send(myCountry);
  });
});
