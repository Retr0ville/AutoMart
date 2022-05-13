const express = require('express')
const router = express.Router()
const { get_cars, get_car, create_cars } = require('../controllers/carControllers')

router.get('/cars', get_cars)
router.get('/car/:id', get_car)
router.post('/cars', create_cars)

module.exports = router
