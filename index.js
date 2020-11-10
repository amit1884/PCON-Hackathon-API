const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const constant = require('./constants')
const cors =require('cors')
const scholarRouter = require('./routes/scholarships.js')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get('/', (_req, res) => {
    res.send('Welcome To Portal!');
});

app.use('/scholars',scholarRouter);

mongoose
  .connect(
    constant.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  // eslint-disable-next-line no-console
  .then(() => console.log('Database Connected'));

module.exports = app