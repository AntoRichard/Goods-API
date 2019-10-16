const mongoose = require('mongoose');

const goodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  qty: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

const goodModel = mongoose.model('goods', goodSchema);

module.exports = goodModel;
