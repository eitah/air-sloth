/* eslint-disable new-cap, array-callback-return */

import express from 'express';
const router = module.exports = express.Router();
import Person from '../models/person';
import City from '../models/city';
import Country from '../models/country';

router.get('/', (req, res) => {
  Person.find((err, users) => {
    res.render('home/index', { users });
  });
});

router.get('/about', (req, res) => {
  res.render('home/about');
});

router.get('/faq', (req, res) => {
  res.render('home/faq');
});
