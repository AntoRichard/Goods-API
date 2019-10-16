const mongoose = require('mongoose');
const config = require('config');

const MongoDB = async () => {
  try {
    await mongoose.connect(config.get('MongoDB_url'));
    console.log('MongoDB connected');
  } catch (err) {
    resizeBy.status(500).json({
      msg: 'Internal server problem'
    });
  }
};

module.exports = MongoDB;
