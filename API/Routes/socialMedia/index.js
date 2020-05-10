const express = require('express')
const router = express.Router()


const getData = require('./getLogin')
const getProfile = require('./getProfile')
const getComments = require('./getcomments')

router.get("/getlogin", getData)
router.get('/getprofile', getProfile)
router.get('/getcomments', getComments)

module.exports =router

