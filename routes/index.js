var express = require('express');
var router = express.Router();
const distanceInWords = require("date-fns/formatDistanceToNow");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page - Serve Index! */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', messages: messages, format: distanceInWords});
});

module.exports = router;
