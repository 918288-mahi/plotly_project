const express = require("express");
const cors = require("cors");
const app = express();
const data=require('./data.json')
const port = 8080;

app.use(express.static("public"));
app.use(cors());


app.get("/data/:source", (req, res) => {
  const source = req.params.source;
  if (data[source]) {
    res.json(data[source]);
  } else {
    res.status(404).send("Data source not found");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
