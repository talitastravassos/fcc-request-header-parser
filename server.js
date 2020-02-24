const express = require('express');
const app = express();
const cors = require('cors');
const routes = require("./routes");

app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use("/api", routes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}`));
