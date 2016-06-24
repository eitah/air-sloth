/* eslint-disable new-cap, array-callback-return */

import express from 'express';
const router = module.exports = express.Router();
import Person from '../models/person';

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
