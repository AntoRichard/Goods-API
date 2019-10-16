const express = require('express');
const {
  reduceGoodsGet,
  reduceGoodsPost
} = require('../Controller/ReduceGoods');
const Route = express();

Route.get('/reduce', reduceGoodsGet);
Route.post('/reduce', reduceGoodsPost);

module.exports = Route;
