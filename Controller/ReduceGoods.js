const GoodsDB = require('../Models/Goods');

exports.reduceGoodsGet = (req, res, next) => {
  res.status(200).json({
    msg: 'reduce goods get'
  });
};

exports.reduceGoodsPost = async (req, res, next) => {
  const { name, qty } = req.body;
  try {
    const response = await GoodsDB.updateOne({ name }, { qty });
    console.log(response);
    res.status(200).json({
      msg: 'reduce goods post'
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};
