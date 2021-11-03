const express = require("express");
const connectDB = require("./connection");
const cors = require("cors");
const helmet = require("helmet");

const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function start() {
  connectDB()
    .then(() => {
      console.log(`Database connected to ${process.env.DATABSE_URL}`);

      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

start();
