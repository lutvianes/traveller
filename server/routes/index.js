const express = require('express');
const router = express.Router();

router.use('/pois', require('./poi'));

module.exports = router;
