var express = require('express');
var router = express.Router();
const secret = require('../../config/secrets');

router.get('/', function(req, res, next) {
    res.locals.api_key = secret.google.api.key;
    res.render('index', { title: 'Traveller' });
});

module.exports = router;
