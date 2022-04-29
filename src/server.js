const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");

const app = express();

//environment variable
env.config();

app.use(express.json());

//mongodb connection
mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@firstcluster.u4otn.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`, //cloud
    process.env.MongoDB_URI, //local
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database Connected");
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
