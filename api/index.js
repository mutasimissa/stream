const express = require('express');
const router = express.Router();

const streamAPI = require('./streamAPI')
router.use('/stream', streamAPI);

module.exports = router;
