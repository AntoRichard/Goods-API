const express = require('express');
const { addGoodsGet, addGoodsPost } = require('../Controller/AddGoods');
const Route = express();

Route.get('/add', addGoodsGet);
Route.post('/add', addGoodsPost);

module.exports = Route;
