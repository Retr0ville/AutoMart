const express = require('express')
const router = express.Router()
const { create_cars } = require('../controllers/carControllers')

router.post('/cars', create_cars)

module.exports = router
