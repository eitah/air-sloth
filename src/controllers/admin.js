/* eslint-disable new-cap, no-console */

import express from 'express';
const router = module.exports = express.Router();
import Person from '../models/person';

router.get('/', (req, res) => {
  res.render('admin');
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
