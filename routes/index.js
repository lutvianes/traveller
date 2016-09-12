var express = require('express');
var router = express.Router();

/* Client app router */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Traveller' });
});
/* API router */
router.use('/api', require('../server/routes'));

module.exports = router;
