const express = require("express");
const env = require("dotenv");
const app = express();

//environment variable
env.config();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
