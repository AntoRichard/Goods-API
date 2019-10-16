const express = require('express');
const { getAllGet, getAllPost } = require('../Controller/GetAll');
const Route = express();

Route.get('/getall', getAllGet);
Route.post('/getall', getAllPost);

module.exports = Route;
