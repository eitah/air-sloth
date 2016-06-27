/* eslint-disable new-cap */

import express from 'express';
import Country from '../models/country';
import City from '../models/city';
import Person from '../models/person';
const router = module.exports = express.Router();

router.get('/:id', (req, res) => {
  console.log('requesnt', req.params.id);
  Person.findById(req.params.id, (err, person) => {
      console.log('Person', person);
    Country.find((err, countries) => {
      console.log('Countries', countries);
      res.render('user/index', {person, countries});
    });
 });
 });

 // router.post('/:id', (req, res) => {
 //   console.log("info:",req.params.id);
 //   Person.find((err, user) => {
 //    res.render('user/index', user);
 //  });
 //  });

  router.post('/:id/confirmBuy', (req, res) => {

    console.log("RequestDetails:",req.params.id, req.body);
  //Deduct from User
    Person.findById(req.params.id, (err, person) => {
        person.balance= person.balance - req.body.city2buyCost;
        person.save((err) => {

        City.find({name : req.body.city2buy},(err, city) =>{
          city.balance=city.balance+person.balance;
          console.log("city balance", city.balance);
          res.send({status:"Updated"});
        })


        });
      // res.render('user/index', user);
   });



   });


  router.get('/:id/:country/getcities', (req, res) => {
    console.log('City request input', req.params.id, 'param', req.params);
    Person.findById(req.params.id, (err, person) => {
        console.log('Person within country', person);
      City.find((err, Cities) => {
        const CitiesinCountry = Cities.filter(c => c.country=== req.params.country)
        console.log('Cities in that country', CitiesinCountry);
        res.send({person, CitiesinCountry});
      });
   });
   });
