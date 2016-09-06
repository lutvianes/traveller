var express = require('express');
var router = express.Router();

/* Client app router */
router.use('/', require('../client/routes'));
/* API router */
router.use('/api', require('../server/routes'));

module.exports = router;
