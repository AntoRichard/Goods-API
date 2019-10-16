const GoodsDB = require('../Models/Goods');

exports.addGoodsGet = (req, res, next) => {
  res.status(200).json({
    msg: 'add goods get'
  });
};

exports.addGoodsPost = async (req, res, next) => {
  const { name, qty, price } = req.body;
  try {
    const product = new GoodsDB({
      name,
      qty,
      price
    });
    console.log(product);
    await product.save();
    res.status(202).json({
      msg: 'product added'
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};
