const mongoose = require("mongoose");

const User = require("../models/User.model");
const Room = require("../models/Room.model");

const connectDB = () => {
  return mongoose.connect(process.env.DATABSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
