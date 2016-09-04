var express = require('express');
var router = express.Router();
var apiKey = require('../config/api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
    res.render('map', {api_key: apiKey.google.api_key});
})

module.exports = router;
