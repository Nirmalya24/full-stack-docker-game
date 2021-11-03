const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomID: String,
    createdBy: String,
  },
  { timestamps: true }
);

const User = mongoose.model("Room", roomSchema);

module.exports = User;
