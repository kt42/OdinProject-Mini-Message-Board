var express = require('express');
var router = express.Router();

/* GET /new. Serve message form */
router.get('/', function(req, res, next) {
  res.render('form');
});

/* Post to /new. Add the message to messages array */
router.post('/', function(req, res, next) {
  messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  res.redirect('/');
});

module.exports = router;