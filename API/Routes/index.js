const express = require('express');
const router = express.Router()

const socialmedia = require('./socialMedia')

router.use('/socialmedia', socialmedia)


module.exports = router