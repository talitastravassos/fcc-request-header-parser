const express = require("express");
const router = express.Router();

router.use(express.json());

router.get("/whoami", function (req, res) {
  // console.log(req)
  res.send({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

module.exports = router;
