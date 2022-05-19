const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
var data = require("./clients.json");

app.listen(port, () => console.log(`Listening on port ${port}`));

// GET routes
app.get("/clients", (req, res) => {
  res.send({ cordinates: data });
});

//create a GET route for serving data.json
