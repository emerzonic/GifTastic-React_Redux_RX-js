
require('dotenv').config();
const express = require("express");

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// App PORT setting
const PORT = process.env.PORT || 3001;
// Application server.
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});