const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const socket = require("./socket")(io);
const connectDB = require("./connection");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Database Connection
connectDB()
  .then(() => {
    console.log(`Database connected to ${process.env.DATABSE_URL}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Server connection
http.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

