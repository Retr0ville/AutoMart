require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const carRoutes = require('./routes/carRoutes')

const app = express()

//middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname+'public/'))

const port = process.env.PORT || 8030
const uri = process.env.DB_URI
const options = {
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useNewUrlParser: true,
}

mongoose.connect(uri, options).then(
  () => {
          app.listen(port, (err)=> {
        if(!err) {
          console.log(`listening on port ${port}`)
        }
        else {
          console.log('an error occured server')
        }
      })
    },
  (err) => {
    err && console.log('mongoDB error start', err, 'mongoDB error end')
  }
);

/*
GET to /api/cars << car collection ;
GET to /api/car:id << single car ;
POST to /api/cars << add a car ;
DELETE to /api/car:id << remove car and return deleted car ;
*/

app.use('/api', carRoutes)
app.get('/:id', (req, res)=>{
  const {id} = req.params
  res.send(`Hi id: ${id}`)
})
app.get('*', (req, res)=>{
  res.status(400).send({error: 'You reached an invalid endpoint'})
})
