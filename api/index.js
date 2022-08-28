const express = require('express');
const router = express.Router();

const helloAPI = require('./helloAPI')
router.use('/hello', helloAPI);

module.exports = router;
