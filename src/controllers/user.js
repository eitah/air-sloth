/* eslint-disable new-cap,no-console, array-callback-return */

import express from 'express';
import Country from '../models/country';
// import City from '../models/city';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/:id', (req, res) => {
  console.log(req.body);
  Person.findById(req.params.id, (err, person) => {
    Country.find((err2, countries) => {
      res.render('user/index', { person, countries });
    });
  });
});


router.post('/:id', (req, res) => {
  console.log('info:', req.params.id);
  Person.find((err, user) => {
    res.render('user/index', user);
  });
});
