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

// res.render('user/index', {countries: [{name: 'brazil' , picture: 'http://kids.nationalgeographic.com/content/dam/kids/photos/Countries/A-G/brazil-christ-the-redeemer.jpg'},
// {name: 'mexico' , picture: 'http://i2.cdn.turner.com/cnnnext/dam/assets/151011072406-insiderguide-mexicocity-main-exlarge-169.jpg'},
// {name: 'Japan' , picture: 'https://www.idp.com/global/-/media/IDP/Global/Destinations/US/New-York-USA.ashx?h=580&w=960&la=en&hash=79B07D830CCB09627DEA35B0CF56FA390E15B6F8'}
// ]});
