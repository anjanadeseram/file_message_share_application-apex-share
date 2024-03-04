const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');       //environmental variables
const cors = require('cors');           //middleware
const bodyParser = require('body-parser');   
const { dbConnect } = require("./utils/dbConnect");

//import APIs
const MessageAPI = require('./apis/message.api'); 

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 4445;

//root route
app.route('/').get((req, res) => {
  res.send('M Application');
});

//register router - CHANGEABLE
app.use('/message', MessageAPI());
// app.use('/category', categoryAPI());

app.listen(PORT, () => {
  dbConnect();
  console.log(`Server is up and running on PORT ${PORT}`);
});