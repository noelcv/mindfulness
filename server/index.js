'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

// const router = require('./router');
const PORT = 3002;

app.use(cors());
app.use(express.json());
// app.use(router);

app.listen(PORT, () => {
  try {
  console.log(`Express Server up and running at http://localhost:${PORT}`);
  } catch(err) {
    console.log(err);
  }
})