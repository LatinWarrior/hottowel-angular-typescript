/*jshint node:true*/

'use strict';

import express = require('express');

var router = express.Router();
import { send404, notFoundMiddleware } from './utils/notfound';  // use latest TS 1.5, inspired from ES6
//import four0four = require('./utils/404');
import data = require('./data');

router.get('/people', getPeople);
router.get('/person/:id', getPerson);
router.get('/person/:id/vehicles', getVehicles);
router.get('/person/:id/vehicles/:id', getVehicle);
router.get('/*', notFoundMiddleware);

module.exports = router;

//////////////

//EG TODO: find type for next argument
function getPeople(req: express.Request, res: express.Response, next: any) {
    res.status(200).send(data.getPeople());
}

function getPerson(req: express.Request, res: express.Response, next: any) {
    var id = +req.params.id;
    var person = data.getPeople().filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        send404(req, res, 'person ' + id + ' not found');
    }
}

function getVehicles(req: express.Request, res: express.Response, next: any) {
    res.status(200).send(data.getVehicles());
}

function getVehicle(req: express.Request, res: express.Response, next: any) {
    var id = +req.params.id;
    var vehicle = data.getVehicles().filter(function(v) {
        return v.id === id;
    })[0];

    if (vehicle) {
        res.status(200).send(vehicle);
    } else {
        send404(req, res, 'vehicle ' + id + ' not found');
    }
}