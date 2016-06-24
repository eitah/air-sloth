/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/', (req, res) => {
  country.find((err, country) => {
   res.render('user/index', { country });
 });
 });
