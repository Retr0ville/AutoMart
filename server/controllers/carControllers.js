const carModel = require('../models/CarModel')
const mongoose = require('mongoose')

const create_cars = ( req, res ) => {
  try {
    const carInstance = new carModel(req.body)
    carInstance.save()
      .then((car)=>{
        res.status(201).send(car)
      }).catch((err)=>{res.json({error : err.message})})
    } catch(err) {
      res.status(400).send({error: 'an error occured, couldn\'t update the database'})
    }
}

module.exports = {
  create_cars,
}
