const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const MongoDB = require('./Database/database');
const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(express.json({ extended: false }));

MongoDB();

app.use(require('./Routes/GetAll')); // get('/getall');
app.use(require('./Routes/AddGoods')); // post('/add',(name, qty, price));
app.use(require('./Routes/ReduceGoods')); // post('/reduce',(name, qty));

app.listen(PORT, () => console.log(`Server running in PORT : ${PORT}`));
