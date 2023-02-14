const express = require('express');

const server = require('../Controllers/data')
const server2 = require('../Controllers/Bollywood')
const server3 = require('../Controllers/Technology')
const server4 = require('../Controllers/Hollywood')
const server5 = require('../Controllers/Fitness')
const server6 = require('../Controllers/Food')
const server7 = require('../Controllers/Top')


const dataRouter = express.Router()

dataRouter
    .route('/home')
    .get(server.apiController);

dataRouter
    .route('/bollywood')
    .get(server2.bollywood);

dataRouter
    .route('/technology')
    .get(server3.technology);

dataRouter
    .route('/hollywood')
    .get(server4.hollywood);

dataRouter
    .route('/fitness')
    .get(server5.fitness);

dataRouter
    .route('/food')
    .get(server6.food);

dataRouter
    .route('/top')
    .get(server7.top);

module.exports = dataRouter;

