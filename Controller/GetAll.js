const GoodDB = require('../Models/Goods');

exports.getAllGet = async (req, res, next) => {
  try {
    const data = await GoodDB.find();
    res.status(201).json({
      data,
      msg: 'success'
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};

exports.getAllPost = (req, res, next) => {
  res.status(200).json({
    msg: 'getall post'
  });
};
