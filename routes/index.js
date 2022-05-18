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

/* GET /new. Serve message form */
router.get('/new', function(req, res, next) {
  res.render('form');
});

/* Post to /new. Add the message to messages array */
router.post('/new', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
});


module.exports = router;
